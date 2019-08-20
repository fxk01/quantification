import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import CreateStore from './store';

import routes from './routes';




const store = CreateStore();


function renderRouteConfig(routes, contextPath) {
  // Resolve route config object in React Router v4.
  const children = []; // children component list

  const renderRoute = (item, routeContextPath) => {
    let newContextPath;
    if (/^\//.test(item.path)) {
      newContextPath = item.path;
    } else {
      newContextPath = `${routeContextPath}/${item.path}`;
    }
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes, newContextPath);
      children.push(
        <Route
          key={newContextPath}
          render={props => <item.component {...props}>{childRoutes}</item.component>}
          path={newContextPath}
        />
      );
    } else if (item.component) {
      children.push(<Route key={newContextPath} component={item.component} path={newContextPath} exact />);
    } else if (item.childRoutes) {
      item.childRoutes.forEach(r => renderRoute(r, newContextPath));
    }
  };

  routes.forEach(item => renderRoute(item, contextPath));

  // Use Switch so that only the first matched route is rendered.
  return (
    <Switch>
    
      {children}
    </Switch>);
}





class App extends Component {
  render() {
    const children = renderRouteConfig(routes, '/');
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ConnectedRouter history={store.history}>{children}</ConnectedRouter>
            </Provider>
        </BrowserRouter>
    );
  }
}



export default App;
