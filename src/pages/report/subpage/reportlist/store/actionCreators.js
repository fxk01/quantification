import * as constants from './constants'
import api from 'api'
const  { getReportList } = api



export const getData = (payload) => {
	return (dispatch) => {
		getReportList(payload).then(res=>{
			if(~~res.code===1){
				const listData = res.data.listData;
				dispatch({type:constants.REPORTLISTUPDATA,data:{
					listData,
					page:1,
					selectedKeys:payload.type,
				}})
			}else{
				console.log(res)
			}
		})
	}
}


