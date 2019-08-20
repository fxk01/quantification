
  import Team from './index';
  import {
    AchievementLoader,
    OutstandingLoader,
  } from './loadable';


  export default {
    path: '/team',
    component: Team,
    childRoutes: [
      { path: '/team/achievement', component: AchievementLoader, isIndex: true },
      { path: '/team/outstanding', component: OutstandingLoader }
    ],
  };
