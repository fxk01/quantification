import * as constants from './constants'
import api from 'api'
const  { getOptimalTradeList  } = api



export const getData = () => {
	return (dispatch) => {
		getOptimalTradeList ().then(res=>{
			if(~~res.code===1){
			
				dispatch({type:constants.TRADELIST,data:res})
			}
		})
	}
}

