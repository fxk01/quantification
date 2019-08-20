import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as ProfitReducer } from 'account/subpage/profit/store';
import { reducer as ExportsReducer } from 'account/subpage/exports/store';
import { reducer as assortmentReducer } from 'account/subpage/assortment/store';
import { reducer as loginlandingReducer } from '../pages/login/subpage/loginlanding/store';
import { reducer as appReducer } from '@/containers/store';
import { reducer as report } from '@/pages/report/subpage/reportlist/store';
import { reducer as amountReducer } from '../pages/account/subpage/amount/store';
import {reducer as team } from '@/pages/team/subpage/achievement/store'
import {reducer as teamHistory } from '@/pages/team/subpage/outstanding/store'
import {  routerReducer } from 'react-router-redux'





const defaultState = {
	global: false,
	models: {},
	effects: {},
} 
const loading = (state = defaultState, action)=> {
	switch (action.type) {
		case 'LOADING/SHOW' :
			return { ...state ,...action.payload}
		case 'LOADING/HIDE':
			return { ...state ,...action.payload}
		default : 
			return state;
	}
}

const reducer = combineReducers({
	header: headerReducer,
	Profit: ProfitReducer,
	report,
	loginlanding: loginlandingReducer,
	amount: amountReducer,
	loading,
	router:routerReducer,
	app:appReducer,
	assortment:assortmentReducer,
	exports : ExportsReducer,
	team,teamHistory
});

export default reducer;
