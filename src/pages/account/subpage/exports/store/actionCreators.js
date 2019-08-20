import * as constants from './constants'
import api from 'api'
const  { getUserReportData } = api



export const downloadBegin = (value) => ({
	type: constants.DOWNLOAD_BEGIN,
	value: value
});

export const downloadEnd = (value) => ({
	type: constants.DOWNLOAD_END,
	value: value
});

export const getUserReport = (payload) => {
	return (dispatch) => {
		getUserReportData(payload).then((res) => {
			if(~~res.code===1){
				dispatch({type:constants.UPDATESTATE,payload : res.data})
			}
		});
	}
}
