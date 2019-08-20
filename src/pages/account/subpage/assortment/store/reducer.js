import { fromJS } from 'immutable';

const defaultState = fromJS({
  TradeData : [],
  TradeList :[],
  TradePage: 0,
  selectedKeys:'days',
  totalPage : 0
});

const addTradeList = (state,action)=> {
  return state.merge({
    'TradeList':state.get('TradeList').concat(action.list),
    'totalPage' : action.totalPage
  }).update('TradePage',v=>++v)
}


const updataState = (state,action) =>{
  return state.set('TradeData',action.data)
}


const TradeCount = (state,action) =>{
  return fromJS({...state.toJS(),...action.list})
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'assortment/updateState':
    return updataState(state,action)
    case 'assortment/addTradeList':
    return addTradeList(state,action);
    case 'assortment/UserTradeInfo':
    return TradeCount(state,action)
    default:  
      return state;
  }
};



