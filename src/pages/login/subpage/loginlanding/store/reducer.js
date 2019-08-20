import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	loggedIn :false,
	user : {}
});



export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			return state.merge({
				loggedIn: fromJS(action.loggedIn),
				user: fromJS(action.user),
			});
		case constants.LOGOUT:
			return state.merge({
				loggedIn: fromJS(action.loggedIn),
				user: fromJS(action.user),
			});
		default:
			return state;
	}
}
