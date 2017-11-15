// Composant Header fantasy
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// constantes
import { REST_URL } from '../../constants/pathname'

export class HeaderFantasy extends Component {

	constructor() {
		super();
		this.state = {
			pagesExergue: []
		}
	}

	componentDidMount() {
		// appel du json de wordpress consacré aux articles
		let dataURL = REST_URL + "/posts";
		// seulement les pages dont la catégorie est "exergue fantasy, sous categorie de la fantasy"
		// seulement les deux derniers, triés par date
		fetch(dataURL + "?categories=267&orderby=date&_embed=1&per_page=2")
			.then(res => res.json())
			.then(res => {
				this.setState({
					pagesExergue: res
				})
			});
	}

	render() {

		if (this.state.pagesExergue.length > 0) {

			// construction de la liste des pages Exergue Fantasy
			let pagesExergueList = this.state.pagesExergue.map((post, index) => {
				const bgStyle = {
					backgroundImage: 'url(' + post.acf.photo_citation.sizes.medium + ')'
				};
				return (
					<div className={"flipping-quote quote-0" + index}>
						<span className="author"><span style={bgStyle}></span></span>
						<blockquote className="quote">
							<span className="q" dangerouslySetInnerHTML={ {__html: post.acf.citation_pour_exergue} } />
							<span>{ post.acf.reference_citation ? post.acf.reference_citation : ''}</span>
						</blockquote>
						<Link className="more" to={"/fantasy/" + post.id + "/" + post.slug}>
							{ post.acf.titre_court_article ? post.acf.titre_court_article : post.title.rendered }
						</Link>
					</div>
				)
			});

			return (
				<section id="header_section" className="header_section fantasy_section">
					<div className="row">
						<div className="small-12 columns">
							<h1>La fantasy</h1>
							{ pagesExergueList }
						</div>
					</div>
				</section>
			);

		} else {

			return false;

		}
	}
}


export default HeaderFantasy;
