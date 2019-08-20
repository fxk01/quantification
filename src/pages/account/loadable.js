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

export const AmountLoader = Loadable({
  loader: () => import('./subpage/amount'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});

export const ProfitLoader = Loadable({
  loader: () => import('./subpage/profit'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});

export const AssortmentLoader = Loadable({
  loader: () => import('./subpage/assortment'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});

export const ExportsLoader = Loadable({
  loader: () => import('./subpage/exports'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});
