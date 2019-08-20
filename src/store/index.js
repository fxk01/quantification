import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware  } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const rrrMiddleware = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default (initialState)=>({
	...createStore(reducer,initialState, composeEnhancers(
		applyMiddleware(thunk,rrrMiddleware)
	)),
	history
});