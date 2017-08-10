// Composant conteneur de la page Fantasy
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopFantasySkeleton from './skeletons/fantasy-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class FantasyRoot extends Component {
	render() {
		return (
			<div className="page-fantasy">
				<Helmet
					link={[
						getPageCss('fantasy')
					]}
					title="Tout savoir sur la fantasy ~ Elbakin.net"
				/>
				<DesktopFantasySkeleton />
			</div>
		)
	}
}
export default FantasyRoot;