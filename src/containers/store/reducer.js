import { fromJS } from 'immutable';
import store from 'store'

const defaultState =fromJS({
  user : {},
  locationPathname : '',
  locationQuery: {},
  theme: store.get('theme') || 'light',
}) 


export default (state=defaultState,action)=> {
  switch(action.type){
    case 'app/updataState':
    return fromJS({...state.toJS(),...action.payload});
    default : 
    return state
  }
}