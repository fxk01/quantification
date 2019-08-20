import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const LoadingComponent = (props) => {
  if (props.error) {
    return <div style={{width: '100%', height:'100%', display:'flex',alignItems: 'center', justifyContent: 'center', color: '#fff'}}>加载失败!</div>;
  } else if (props.timedOut) {
    return <div style={{width: '100%', height:'100%', display:'flex',alignItems: 'center', justifyContent: 'center', color: '#fff'}}>加载超时...</div>;
  } else if (props.pastDelay) {
    return <div style={{width: '100%', height:'100%', display:'flex',alignItems: 'center', justifyContent: 'center'}}><Spin /></div>;
  } else {
    return null;
  }
};

export const StockIndexLoader = Loadable({
  loader: () => import('./subpage/stockindex'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});

export const ExchangeLoader = Loadable({
  loader: () => import('./subpage/exchange'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});

export const CalendarLoader = Loadable({
  loader: () => import('./subpage/calendar'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});
