import * as constants from './constants'
import api from 'api'
const  { getOptimalAccData  } = api
export const info = ()=>{
	return (dispatch)=>{
		getOptimalAccData().then(res=>{
			if(res.code==='1'){
				dispatch(updataState({...res.data}))
			}
		})
	}
}

const updataState = (data) =>({
	type:constants.OPTIMALACCDATA,
	data 
})


