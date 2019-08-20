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

export const NewsListLoader = Loadable({
  loader: () => import('./subpage/newslist'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent
});
