import PrimaryWrap from '../containers/primaryWrap';

import accountRoute from '../pages/account/route';

import teamRoute from '../pages/team/route';

import quotationsRoute from '../pages/quotations/route';

import newsRoute from '../pages/news/route';

import reportRoute from '../pages/report/route';

import loginRoute from '../pages/login/route';


// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes for new features, remove features, etc.
const childRoutes = [
  accountRoute,
  teamRoute,
  quotationsRoute,
  newsRoute,
  reportRoute,
  loginRoute
];
const routes = [{
  path: '/',
  component: PrimaryWrap,
  isIndex: true,
  childRoutes: [
    ...childRoutes,
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}];

function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = route.childRoutes.find(child => child.isIndex);
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = route.path;
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);

export default routes;