import * as constants from './constants'
import api from 'api'
import { message } from "antd"
const  { getHistoryInfo ,getUserInfo } = api
export const info = ()=>{
	return (dispatch)=>{
		getUserInfo().then(res=>{
			if(res.code==='1'){
				dispatch(updataState({...res.data}))
			}
		})
	}
}


export const updataState = (data) => (	{
	type: constants.UPDATESTATE,
	data : data
})

export const getData = (key) => {
	return (dispatch) => {
		getHistoryInfo({type : key}).then((res) => {
			if(res.code==='1'&&res.data.listData){
				const result = res.data.listData;
				dispatch(updataState({HistoryInfoData:result}));
			}else{
				message.error(res.msg)
			}
		});
	}
}
