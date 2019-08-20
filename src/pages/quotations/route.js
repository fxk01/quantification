
  import Quotations from './index';
  import {
    StockIndexLoader,
    ExchangeLoader,
    CalendarLoader,
  } from './loadable';

  export default {
    path: '/quotations',
    component: Quotations,
    childRoutes: [
      { path: '/quotations/stockindex', component: StockIndexLoader, isIndex: true },
      { path: '/quotations/exchange', component: ExchangeLoader },
      { path: '/quotations/calendar', component: CalendarLoader }
    ],
  };