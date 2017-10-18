// Composant Liste de livres par thème : EDITO
// =============================================

import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
//import { REST_URL } from '../../constants/pathname'

export class ContainerThemedListBooks extends Component {

	constructor() {
		super();
	}

	render() {

		return (
			<aside id="les_listes">
				<h2>Nos listes</h2>
				<div className="flex-list">
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/all.jpg" alt="*" />
							<p><span>10 anthologies remarquables</span></p>
						</a>
					</article>
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/eternel.jpg" alt="*" />
							<p><span>La bibliothèque de fantasy idéale</span></p>
						</a>
					</article>
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/temeraire.jpg" alt="*" />
							<p><span>10 livres sur les dragons</span></p>
						</a>
					</article>
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/neverwhere.jpg" alt="*" />
							<p><span>Les chefs d'oeuvres de la fantasy urbaine</span></p>
						</a>
					</article>
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/heritage.jpg" alt="*" />
							<p><span>Les 20 livres à éviter, vraiment, absolument et à tout prix</span></p>
						</a>
					</article>
					<article className="flex-item">
						<a href="#">
							<img src="images/illustrations/kushiel.jpg" alt="*" />
							<p><span>Les livres à offrir à la Saint-Valentin</span></p>
						</a>
					</article>
				</div>
				<a href="#" className="shadow-btn dark-shadow-btn">Toutes les listes</a>
			</aside>
		);
	}
}

export default ContainerThemedListBooks;