import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  
  
});




export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.OPTIMALACCDATA:
      return  fromJS(action.data);
    default:
      return state;
  }
};
