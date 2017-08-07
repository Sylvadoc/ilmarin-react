import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router';
import { routerMiddleware } from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import createRoutes from './routes';
import configureStore from './store';

// Create Redux store with initial state (from a global injected into server-generated HTML)
const store = configureStore(window.__INITIAL_STATE__);

// Routes
const routes = createRoutes(store);

ReactDOM.render(
	// 1. on enrobe le composant central par le Provider de Redux
	// afin que le store soit accessible à travers toute l'arborescence de composants
	// 2. le composant 'Router' permet d'intégrer le composant 'routes' où sont définies les routes gérées par React
	<Provider store={store}>
		<Router routes={routes}	/>
	</Provider>,
	document.getElementById('root'));
	registerServiceWorker();