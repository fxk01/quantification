import { fromJS } from 'immutable';
import * as constants from './constants';
import moment from 'moment'
const defaultState = fromJS({
  positionOrderList:[],
  historyTradeList:[],
  // startValue:moment(),
  // endValue:null,
  downloadBegin: null,
  downloadEnd: null,
  changeType:0,
  open:false
});


const updateState = (state, action) =>{
  return fromJS({...state.toJS(),...action.payload})
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.DOWNLOAD_BEGIN:
      return state.set('downloadBegin', action.value);
    case constants.DOWNLOAD_END:
      return state.set('downloadEnd', action.value);
    case constants.UPDATESTATE:
      return updateState(state, action);
    default:
      return state;
  }
};
