
  import Account from './index';
  import {
    AmountLoader,
    ProfitLoader,
    AssortmentLoader,
    ExportsLoader,
  } from './loadable';


  export default {
    path: '/account',
    component: Account,
    childRoutes: [
      { path: '/account/amount', component: AmountLoader },
      { path: '/account/profit', component: ProfitLoader, isIndex: true },
      { path: '/account/assortment', component: AssortmentLoader },
      { path: '/account/exports', component: ExportsLoader }
    ],
  };