// Composant conteneur de la page Home
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopHomeSkeleton from './skeletons/home-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class Home extends Component {
	render() {
		return (
			<div className="page-home">
				<Helmet
					link={[
						getPageCss('main')
					]}
					title="Fantasy, actualité littéraire, cinéma, fantasy et merveilleux | Elbakin.net"
				/>
				<DesktopHomeSkeleton />
			</div>
		)
	}
}
export default Home;