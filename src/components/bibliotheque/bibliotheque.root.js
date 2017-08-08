// Composant conteneur de la page bibliotheque
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopSkeleton from './skeletons/bibliotheque-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class Bibliotheque extends Component {
	render() {
		return (
			<div className="page-library">
				<Helmet
					link={[
						getPageCss('chronique')
					]}
					title="La Bibliothèque fantasy ~ Elbakin.net"
				/>
				<DesktopSkeleton />
			</div>
		)
	}
}
export default Bibliotheque;