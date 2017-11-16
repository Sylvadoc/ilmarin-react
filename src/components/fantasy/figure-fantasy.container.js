// Composant Figure de fantasy
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// constantes
import { REST_URL } from '../../constants/pathname'

export class FigureFantasy extends Component {

	constructor() {
		super();
		this.state = {
			pagesFigures: []
		}
	}

	componentDidMount() {
		// appel du json de wordpress consacré aux articles
		let dataURL = REST_URL + "/posts";
		// seulement les pages dont la catégorie est "Pour commencer, sous categorie de la fantasy"
		// seulement les deux derniers, triés par date
		fetch(dataURL + "?categories=270&orderby=date&_embed=1&per_page=1")
			.then(res => res.json())
			.then(res => {
				this.setState({
					pagesFigures: res
				})
			});
	}

	render() {

		if (this.state.pagesFigures.length > 0) {

			// construction de la liste des pages "Pour commencer" Fantasy
			let figure = this.state.pagesFigures.map((post, index) => {

				const postImage = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium ? <img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /> : <img itemProp="image" src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} />;

				return (
					<article className={"article_focus article-begin-" + index}>
						<div className="inner_content">
							<Link to={"/fantasy/figure/" + post.id + "/" + post.slug}>
								{postImage}
								<p><span dangerouslySetInnerHTML={ {__html: post.title.rendered} } /></p>
							</Link>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
								quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat.</p>
						</div>
					</article>
				)
			});

			return (
				<div>
					{ figure }
				</div>
			);

		} else {

			return false;

		}
	}
}


export default FigureFantasy;
