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

export const LoginLandingLoader = Loadable({
  loader: () => import('./subpage/loginlanding'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent,
});

export const ChangePasswordLoader = Loadable({
  loader: () => import('./subpage/changepassword'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent,
});

export const ForgetPasswordLoader = Loadable({
  loader: () => import('./subpage/forgetpassword'),
  delay: 300,
  timeout: 10000, // 10 seconds
  loading: LoadingComponent,
});