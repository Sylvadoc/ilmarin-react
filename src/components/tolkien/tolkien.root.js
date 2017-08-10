// Composant conteneur de la page Tolkien
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopTolkienSkeleton from './skeletons/tolkien-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class TolkienRoot extends Component {
	render() {
		return (
			<div className="page-tolkien">
				<Helmet
					link={[
						getPageCss('tolkien')
					]}
					title="Tout savoir sur J.R.R. Tolkien ~ Elbakin.net"
				/>
				<DesktopTolkienSkeleton />
			</div>
		)
	}
}
export default TolkienRoot;