import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  HistoryInfoData: [
 
  ],
  trderInfo : [
    
  ],
  selectedKeys:'quarter'
});


const updateState = (state, action) =>{
  return fromJS({ ...state.toJS(),...action.data})
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.UPDATESTATE:
      return updateState(state, action);
    default:
      return state;
  }
};
