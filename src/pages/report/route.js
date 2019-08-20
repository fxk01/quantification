
  import Report from './index';
  import {
    ReportListLoader,
    ReportDetailLoader,
  } from './loadable';


  export default {
    path: '/report',
    component: Report,
    childRoutes: [
      { path: '/report/reportlist', component: ReportListLoader, isIndex: true },
      { path: '/report/reportdetail/:id', component: ReportDetailLoader }
    ],
  };
