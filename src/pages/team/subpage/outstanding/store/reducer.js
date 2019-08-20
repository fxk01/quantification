import { fromJS } from 'immutable';
import * as constants from './constants';

 const defaultState = fromJS({
    data: [
      
    ]
 })





 export default (state=defaultState , action) => {
   switch (action.type){
     case constants.TRADELIST:
     return fromJS(action.data)
     default : 
     return state
   }
 }