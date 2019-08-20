
import * as constants from './constants';
import api from 'api'
const {getUserTradeCount ,getUserTradeRateInfo ,getUserTradeLog} = api
const changAmountData = (result) => ({
	type: constants.CHANGE_AMOUNT_DATA,
	data: result,

});

const addAmountList = (list, nextPage) => ({
	type: constants.ADD_AMOUNT_LIST,
	list,
	nextPage
})
export const tradeLog  = (page) =>{
	return (dispatch) =>{
		getUserTradeLog({page}).then(res=>{
			if(~~res.code===1){
				dispatch(addAmountList(res.data.tradeLog,page+1))
			}
		})
	}
}


export const getCount = (key) =>{
	return (dispatch) =>{
		getUserTradeCount({type:key}).then(res=>{
			if(~~res.code===1){
				dispatch(changAmountData(res.data.listData))
			}
		})
	}
}

const updata = (result)=>({
	type : constants.UPDATA,
	data : result
})
export const RateInfo = ()=>{
	return(dispatch)=>{
		getUserTradeRateInfo().then(res=> {
			if(~~res.code===1){
				dispatch(updata(res.data))
			}
		})
	}
}