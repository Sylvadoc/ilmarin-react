// Composant conteneur de la page bibliotheque
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Helmet from "react-helmet";

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
				<ul>
					<li>ceci est la Home</li>
					<li><Link to="/bibliotheque">page bibliotheque</Link></li>
				</ul>
			</div>
		)
	}
}
export default Home;