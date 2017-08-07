// Routes gérées par React
// =======================

// Ce composant contient l'ensemble des routes gérées par React
// il est partagé par les parties cliente et serveur

// la route principale '/' est mappée sur la home-page
// ensuite, les routes s'imbriquent en fonction de l'imbrication des composants
// 1 route = 1 composant

import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import IndexApp from './index.app';
import Home from './components/home/home.root';
import Bibliotheque from './components/bibliotheque/bibliotheque.root';
import { BIBLIOTHEQUE } from './constants/pathname';

// definition des routes gerees par react router
const CommonRoutes = () => {

	return (
		<Route path="/" component={IndexApp}>
			<IndexRoute component={Home}/>
			<Route path={BIBLIOTHEQUE} component={Bibliotheque}/>
		</Route>
	);

};

export default CommonRoutes;
