import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	theme: 'blue'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_TO_THEME_DRAK:
			return state.set('theme', 'dark');
		case constants.CHANGE_TO_THEME_BLUE:
			return state.set('theme', 'blue');
		default:
			return state;
	}
}