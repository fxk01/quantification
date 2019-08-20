import axios from 'axios'
import { cloneDeep, isEmpty } from 'lodash'
import pathToRegexp from 'path-to-regexp'
import qs from 'qs'
import store from 'store'

window.cancelRequest = new Map()

export default function request(options) {
  let { data, url, method = 'get' } = options
  const cloneData = cloneDeep(data)

  try {
    let domain = ''
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)
    if (urlMatch) {
      ;[domain] = urlMatch
      url = url.slice(domain.length)
    }

    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domain + url
  } catch (e) {
    // message.error(e.message)
  }

  options.url =
    method.toLocaleLowerCase() === 'get'
      ? `${url}${isEmpty(cloneData) ? '' : '?'}${qs.stringify(cloneData)}`
      : url

  options.headers = {
    'token': store.get('user')?store.get('user').token : ""
  }

  if (url.indexOf('exportReportData')!==-1) {
      options.responseType='arraybuffer'
  } 
  

  return axios(options)
    .then(response => {
      const { statusText, status, data } = response
      if(data.code==='-1'){
        // message.error('登录失效，请重新登录')
      }
      //下载文件
      if(options.url.indexOf('exportReportData')!==-1){
        return response;
        // let blob = new Blob([response.data], {type: "application/pdf"});
        // var fileName = JSON.stringify(response.headers).split(",")[1].split("filename=")[1].replace('"',"").replace('}',"");
        // if (window.navigator.msSaveOrOpenBlob) {
        //     navigator.msSaveBlob(blob, fileName);
        // } else {
        //     var link = document.createElement('a');
        //     link.href = window.URL.createObjectURL(blob);
        //     link.download = fileName;
        //     link.click();
        //     window.URL.revokeObjectURL(link.href);
        //     link.remove();
        // }
      }
      let result = {}
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response,  } = error
      // message.error(message)
    

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
      })
    })
}
