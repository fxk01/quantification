import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	countList: [],
	articleList:[],
	articlePage: 0,
	selectedKeys:'days'
});




const changeAmountData = (state, action) => {
	return state.merge({
		countList: fromJS(action.data)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(fromJS(action.list)),
		'articlePage': action.nextPage
	});
};
const updata = (state,action) =>(
	fromJS({
		...state.toJS(),...action.data
	})
)
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_AMOUNT_DATA:
			return changeAmountData(state, action);
		case constants.ADD_AMOUNT_LIST:
			return addArticleList(state, action);
		case constants.UPDATA:
			return updata(state,action);
		default:
			return state;
	}
}
