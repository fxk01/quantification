
import { pathMatchRegexp } from 'utils';
import api from 'api'
import * as reduxRouter from 'react-router-redux'
import { stringify } from 'querystring';
import store from 'store'
const  {refreshToken} = api
export const query = (payload)=>{
  return(dispatch)=>{
    refreshToken(payload).then(res=>{
      const { code , data } = res;
      if(code==='1'&& data){
        dispatch({type:'app/updataState',payload : {
          user : data
        }})
        store.set('user',data)
        if(pathMatchRegexp('/',window.location.pathname)){
          dispatch(reduxRouter.push('/account/profit'))
        }
      }else {
        store.remove('user')
        dispatch(reduxRouter.replace({pathname:'/login/loginlanding',search:stringify({
          from : window.location.pathname
        })}))
      }
    })
  }
}
export const setupHistory = (history)=>{
  return (dispatch)=>{
    history.listen(location => {
      dispatch({
        type:'app/updataState',
        payload:{
          locationPathname: location.pathname,
          locationQuery: location.query || {},
        }
      })
    })
  }

}