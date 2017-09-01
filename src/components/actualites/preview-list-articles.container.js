// Composant Liste des derniers articles
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerPreviewListArticles extends Component {

	constructor() {
		super();
		this.state = {
			articles: [],
			catArticle: undefined
		}
	}

	componentDidMount() {

		// recuperation de l'information idoine
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "nos articles"
		fetch(dataCatURL + "/" + categorie)
			.then(res => res.json())
			.then(res => {
				this.setState({
					catArticle: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = REST_URL + "/posts";
		// seulement les pages dont le parent est "nos articles"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=6")
			.then(res => res.json())
			.then(res => {
				this.setState({
					articles: res
				})
			});
	}

	render() {

		if (this.state.articles.length > 0 && this.state.catArticle) {

			const posts = this.state.articles;
			const catName = this.state.catArticle.name;
			const catSlug = this.state.catArticle.slug;
			const catId = this.state.catArticle.id;

			// construction de l'article mis en avant
			const mainArticle =
				<div className="inner_content">
					<Link to={"/actualites/articles/" + posts[0].id + "/" + posts[0].slug}>
						{posts[0]._embedded['wp:featuredmedia'] ? <img src={posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={posts[0]._embedded['wp:featuredmedia'][0].alt_text} /> : 'pas de couverture' }
						<p><span dangerouslySetInnerHTML={ {__html: posts[0].title.rendered} } /></p>
					</Link>
				</div>;

			// construction de la liste d'articles
			let allArticles = this.state.articles.map((post, index) => {
				return (
					<li key={"em-li-" + index}><Link to={"/actualites/articles/" + post.id + "/" + post.slug}><span dangerouslySetInnerHTML={ {__html: post.title.rendered} } /></Link></li>
				)
			});

			return (
				<aside id="articles" className="small-12 medium-6 large-4 columns">
					<article className="article_focus">
						{ mainArticle }
					</article>
					<h2><Link to={"/actualites/" + catId + "/" + catSlug}>{ catName }</Link> :</h2>
					<ul>
						{ allArticles }
					</ul>
				</aside>
			);
		} else {
			return null;
		}
	}
}

export default ContainerPreviewListArticles;