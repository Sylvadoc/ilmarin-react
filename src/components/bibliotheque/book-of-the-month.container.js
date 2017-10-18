// Composant Livre du mois
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerMonthsBook extends Component {

	constructor() {
		super();
		this.state = {
			livres: []
		}
	}

	componentDidMount() {
		// appel du json de wordpress consacré aux livres
		let dataURL = REST_URL + "/livre?_embed=1&per_page=100";
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livres: res
				})
			});
	}

	render() {

		// on cherche le livre du mois dans la liste des livres
		let bookOfTheMonth = this.state.livres.map((book, index) => {
			if(book.acf.le_livre_du_mois === true) {
				return (
					<div className="inner_content" key={"month-book-" + index}>
						<Link to={"/bibliotheque/" + book.id + '/' + book.slug}>
							{book._embedded['wp:featuredmedia'] ? <img src={book._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + book.title.rendered} /> : 'pas de couverture' }
							<p><span dangerouslySetInnerHTML={ {__html: book.title.rendered} } /></p>
						</Link>
						<em>De <Link to={"/auteur/" + book.acf.auteur[0].ID + '/' + book.acf.auteur[0].post_name}>{book.acf.auteur[0].post_title}</Link></em>
					</div>
				)
			} else {
				return null;
			}
		});

		return (
			<article className="article_focus small-12 medium-6 large-6 columns">
				<h2><span className="icon icon-trophy"></span> Le livre du mois</h2>
				{bookOfTheMonth}
			</article>
		);
	}
}

export default ContainerMonthsBook;