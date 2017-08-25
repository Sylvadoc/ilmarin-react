// Composant Liste des dernières article d'une émission
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerPostsEmissions extends Component {

	constructor() {
		super();
		this.state = {
			postsEmissions: [],
			catEmission: undefined
		}
	}

	componentDidMount() {

		// recuperation de l'information idoine
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/categories";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataCatURL + "/" + categorie)
			.then(res => res.json())
			.then(res => {
				this.setState({
					catEmission: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/posts";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=6")
			.then(res => res.json())
			.then(res => {
				this.setState({
					postsEmissions: res
				})
			});
	}

	render() {

		if (this.state.postsEmissions.length > 0 && this.state.catEmission) {

			const posts = this.state.postsEmissions;
			const catName = this.state.catEmission.name;
			const catSlug = this.state.catEmission.slug;
			const catId = this.state.catEmission.id;

			// construction de l'article mis en avant
			const MainPost =
				<div className="inner_content">
					<Link to={"/emissions/" + posts[0].id + "/" + posts[0].slug}>
						{posts[0]._embedded['wp:featuredmedia'] ? <img src={posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={posts[0]._embedded['wp:featuredmedia'][0].alt_text} /> : 'pas de couverture' }
						<p><span dangerouslySetInnerHTML={ {__html: posts[0].title.rendered} } /></p>
					</Link>
				</div>;

			// construction de la liste d'articles
			let allPostsByEmissions = this.state.postsEmissions.map((post, index) => {
				return (
					<li key={"em-li-" + index}><Link to={"/emissions/" + post.id + "/" + post.slug}><span dangerouslySetInnerHTML={ {__html: post.title.rendered} } /></Link></li>
				)
			});

			return (
				<aside id={"categorie-" + catSlug} className="flex-item">
					<h2><span className={"icon icon-" + catSlug}></span><Link to={"/emissions/" + catId + "/" + catSlug}>{catName}</Link></h2>
					<article className="article_focus">
						{MainPost}
						<h3>Les derniers articles :</h3>
						<ul>
							{allPostsByEmissions}
						</ul>
					</article>
				</aside>
			);
		} else {
			return null;
		}
	}
}

export default ContainerPostsEmissions;