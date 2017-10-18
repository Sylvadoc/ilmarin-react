// Composant Livre du mois
// =============================================

import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
//import { REST_URL } from '../../constants/pathname'

export class ContainerMonthsBook extends Component {

	constructor() {
		super();
	}

	render() {

		return (
			<article className="article_focus small-12 medium-6 large-6 columns">
				<h2><span className="icon icon-trophy"></span> Le livre du mois</h2>
				<div className="inner_content">
					<a href="#">
						<img src="images/illustrations/aeternia.jpg" alt="Aeternia" />
						<p><span>Aeternia</span></p>
					</a>
					<em>De Gabriel Katz</em>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.</p>
				</div>
			</article>
		);
	}
}

export default ContainerMonthsBook;