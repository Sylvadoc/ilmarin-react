// Composant Livre au débotté
// =============================================

import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
//import { REST_URL } from '../../constants/pathname'

export class ContainerRandomBook extends Component {

	constructor() {
		super();
	}

	render() {

		return (
			<article className="article_focus small-12 medium-6 large-6 columns">
				<h2>Au débotté</h2>
				<div className="inner_content">
					<a href="#">
						<img src="images/illustrations/black.jpg" alt="La Compagnie Noire" />
						<p><span>La Compagnie Noire</span></p>
					</a>
					<em>De Glenn Cook</em>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.</p>
				</div>
			</article>
		);
	}
}

export default ContainerRandomBook;