// Composant conteneur de la page Fantasy
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopEmissionsSkeleton from './skeletons/emissions-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class EmissionsRoot extends Component {
	render() {
		return (
			<div className="page-emission">
				<Helmet
					link={[
						getPageCss('emissions')
					]}
					title="Les émissions & podcasts ~ Elbakin.net"
				/>
				<DesktopEmissionsSkeleton />
			</div>
		)
	}
}
export default EmissionsRoot;