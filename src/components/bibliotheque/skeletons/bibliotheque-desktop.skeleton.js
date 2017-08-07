// Squelette de la page Bibliotheque : version desktop
// =============================================

// imports React
import React, { Component } from 'react';

// imports des composants
import ContainerAllChroniques from './../list-all-chroniques.container';

class BibliothequeDesktop2Skeleton extends Component {
	render() {
		return (
			<div className="coucou">
				<ContainerAllChroniques />
			</div>
		)
	}
}
export default BibliothequeDesktop2Skeleton;