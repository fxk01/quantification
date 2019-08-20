import { fromJS } from 'immutable';
import * as constants from './constants';

 const defaultState = fromJS({
   selectedKeys:'sevenDays',
   page : 1,
   listData :[],
 })

const addList = (state,action) =>{
  return state.merge({
    'listData':state.get('listData').concat(fromJS(action.list)),
    'page':action.nextPage,
  })
}



 export default (state=defaultState , action) => {
   switch (action.type){
     case constants.REPORTLISTADDLIST:
     return addList(state, action);
     case constants.REPORTLISTUPDATA:
     return fromJS(action.data)
     default : 
     return state
   }
 }