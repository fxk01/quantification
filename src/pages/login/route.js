


  import Login from './index';
  import {
    LoginLandingLoader,
    ChangePasswordLoader,
    ForgetPasswordLoader
  } from './loadable';

  export default {
    path: '/login',
    component: Login,
    childRoutes: [
      { path: '/login/loginlanding', component: LoginLandingLoader, isIndex: true },
      { path: '/login/changepassword', component: ChangePasswordLoader },
      { path: '/login/forgetpassword', component: ForgetPasswordLoader },
    ],
  };