import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Router from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import createRoutes from './routes';
import configureStore from './store';

// Create Redux store with initial state (from a global injected into server-generated HTML)
const store = configureStore(window.__INITIAL_STATE__);

// Routes
const routes = createRoutes(store);

render(
	<Provider store={store}>
		<Router routes={routes}	/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();