import { fromJS } from 'immutable';

import api from 'api';

const { getUserTradeKindCount, getUserTradeList, getUserTradeInfo } = api;

export const getKindCount = key => {
  return dispatch => {
    getUserTradeKindCount({ type: key }).then(res => {
      if (res.code === '1') {
        dispatch({
          type: 'assortment/updateState',
          data: fromJS(res.data.listData)
        });
      }
    });
  };
};

// 历史交易详情
export const getTradeList = page => {
  return dispatch => {
    getUserTradeList({ page }).then(res => {
      if (~~res.code === 1) {
        dispatch({
          type: 'assortment/addTradeList',
          list: fromJS(res.data.listData),
          totalPage : res.data.totalPage
        });
      }
    });
  };
};

export const UserTradeInfo = () => {
  return dispatch => {
    getUserTradeInfo().then(res => {
      if (~~res.code === 1) {
        dispatch({
          type: 'assortment/UserTradeInfo',
          list: res.data
        });
      }
    });
  };
};
