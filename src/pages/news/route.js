
  import News from './index';
  import {
    NewsListLoader,
  } from './loadable';


  export default {
    path: '/news',
    component: News,
    childRoutes: [
      { path: '/news/newslist', component: NewsListLoader, isIndex: true }
    ],
  };
