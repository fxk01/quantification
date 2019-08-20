import React, { PureComponent } from 'react';
import makeTrashable from 'trashable';
import {FlexWrap} from '../../style'

const strJson=`{
  "width": "100%",
  "height": "100%",
  "locale": "zh_CN",
  "importanceFilter": "-1,0,1"
}`;


class Calendar extends PureComponent {
  render() {
    return (
      <FlexWrap >
          <div className="tradingview-widget-container" id="tradingview_wrap" style={{background: '#ffffff'}}>
              <div className="tradingview-widget-container__widget" />
          </div>
      </FlexWrap>
    );
  }

  componentDidMount() {
    let result = this.loadPlugin("https://s3.tradingview.com/external-embedding/embed-widget-events.js", strJson)
    this.trashablePromise = makeTrashable(result);
    this.trashablePromise.then(function(script){
      // console.log('success')
    }).catch(function(ex){
      console.log(ex)
    })
  }

  componentWillUnmount() {
    this.trashablePromise.trash()
  }
  

  

  loadPlugin = (url, pluginConfig) => {
    const promise = new Promise(function(resolve, reject){
      var script = document.createElement('script');
      script.type = 'text/javascript';
      if(script.readyState){
          script.onreadystatechange=function(){

              if(script.readyState === "loaded" || script.readyState === "complete"){
                  script.onreadystatechange=null;
                  resolve(script);
              }
          }

      }else{
          script.onload=function(){
            resolve(script);
          }
      }
      
      script.onerror = function() {
        reject('插件加载失败')
      };
      script.innerHTML = pluginConfig;
      script.src = url;
      document.getElementById('tradingview_wrap').appendChild(script);
    });
    return promise
  }
}



export default Calendar;
