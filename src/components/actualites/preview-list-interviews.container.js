// Composant Liste des derniers article d'une émission
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerPreviewListInterviews extends Component {

	constructor() {
		super();
		this.state = {
			interviews: [],
			catInterview: undefined
		}
	}

	componentDidMount() {

		// recuperation de l'information idoine
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataCatURL + "/" + categorie)
			.then(res => res.json())
			.then(res => {
				this.setState({
					catInterview: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = REST_URL + "/posts";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=6")
			.then(res => res.json())
			.then(res => {
				this.setState({
					interviews: res
				})
			});
	}

	render() {

		if (this.state.interviews.length > 0 && this.state.catInterview) {

			const posts = this.state.interviews;
			const catName = this.state.catInterview.name;
			const catSlug = this.state.catInterview.slug;
			const catId = this.state.catInterview.id;

			// construction de l'article mis en avant
			const mainInterview =
				<div className="inner_content">
					<Link to={"/actualites/interviews/" + posts[0].id + "/" + posts[0].slug}>
						{posts[0]._embedded['wp:featuredmedia'] ? <img src={posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={posts[0]._embedded['wp:featuredmedia'][0].alt_text} /> : 'pas de couverture' }
						<p><span dangerouslySetInnerHTML={ {__html: posts[0].title.rendered} } /></p>
					</Link>
				</div>;

			// construction de la liste d'articles
			let allInterviews = this.state.interviews.map((post, index) => {
				return (
					<li key={"em-li-" + index}><Link to={"/actualites/interviews/" + post.id + "/" + post.slug}><span dangerouslySetInnerHTML={ {__html: post.title.rendered} } /></Link></li>
				)
			});

			return (
				<aside id="articles" className="small-12 medium-6 large-4 columns">
					<article className="article_focus">
						{ mainInterview }
					</article>
					<h2><Link to={"/actualites/" + catId + "/" + catSlug}>{ catName }</Link> :</h2>
					<ul>
						{ allInterviews }
					</ul>
				</aside>
			);
		} else {
			return null;
		}
	}
}

export default ContainerPreviewListInterviews;