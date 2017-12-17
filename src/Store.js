import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import authorizationMiddleware from './authorizationMiddleware/authorizationMiddleware';

class Store {
  constructor(initialState = {}) {
    this.history = createHistory();

    const middleware = applyMiddleware(...[authorizationMiddleware, apiMiddleware, routerMiddleware(this.history)]);

    const enhancer = [
      middleware,
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ];

    this.store = createStore(reducers, initialState, compose(...enhancer));
  }

  getHistory() {
    return this.history;
  }

  getCreatedStore() {
    return this.store;
  }
}

export default new Store();
