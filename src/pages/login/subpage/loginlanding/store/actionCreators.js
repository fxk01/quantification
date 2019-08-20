
import * as constants from './constants';
import * as reduxRouter from 'react-router-redux';
import { message } from 'antd'
import store from 'store'
import api from 'api'
const { loginRequest } = api



const changeLogin = (result) => ({
	type : constants.CHANGE_LOGIN,
	loggedIn: true,
	user : result,
})

const logout = () => ({
	type: constants.LOGOUT,
	loggedIn: false,
	user : {}
})



export const handLogin = (payload) => {
	return (dispatch) => {
		loginRequest(payload).then((res) => {
			const result = res.data;
			if (res.code==='1') {
				store.set('user',res.data)
				dispatch(changeLogin(result))
				dispatch(reduxRouter.push('/account/profit'))
			}else {
				message.info(res.msg)
			}
		})
	}
}

export const handLogout = () => {
	return (dispatch) => {
		store.remove('user')
		dispatch(logout())
		dispatch(reduxRouter.push('/login/loginlanding'))
	}
}