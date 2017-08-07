// Squelette de la page Bibliotheque : version desktop
// =============================================

// imports React
import React, { Component } from 'react';

// imports des composants
import Header from './../../header';
import Navigation from './../../navigation';
import ContainerAllChroniques from './../list-all-chroniques.container';
import Footer from './../../footer';

class BibliothequeDesktop2Skeleton extends Component {
	render() {
		return (
			<div>
				<Header />
				<Navigation />
				<ContainerAllChroniques />
				<Footer />
			</div>
		)
	}
}
export default BibliothequeDesktop2Skeleton;