// Composant A LA UNE
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// les composants de la page

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerALaUne extends Component {

	constructor() {
		super();
		this.state = {
			isLoaded: false,
			catALaUne: [],
			postsALaUne: []
		}
	}

	componentDidMount() {

		// recuperation de la categorie A La Une
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "A LA UNE"
		fetch(dataCatURL + "/" + categorie)
			.then(res => res.json())
			.then(res => {
				this.setState({
					catALaUne: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = REST_URL + "/posts";
		// seulement les pages dont le parent est "nos articles"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=9")
			.then(res => res.json())
			.then(res => {
				this.setState({
					postsALaUne: res
				})
			});

		// la page est chargée (didMount)
		this.setState({ isLoaded: true });
	}

	render() {

		if (this.state.postsALaUne.length > 0 && this.state.catALaUne) {

			// définition de toutes les variables nécessaires
/*			const posts = this.state.postsALaUne;
			const catName = this.state.catALaUne.name;
			const catSlug = this.state.catALaUne.slug;
			const catId = this.state.catALaUne.id;*/

			// construction de la liste de news A La Une
			let allArticles = this.state.postsALaUne.map((post, index) => {
				return (
					<div className={"grid-une__item grid-une__item_0" + index} key={"div-grid-" + index}>
						<Link to={"/actualites/articles/" + post.id + "/" + post.slug}>
							{post._embedded['wp:featuredmedia'] ? <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} /> : 'pas de couverture' }
							<span dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
						</Link>
					</div>
				)
			});

			return (
				<section id="news_general" className={"da-grid " + (this.state.isLoaded ? 'is-loaded' : 'is-charging')}>
					<span className="simili-title">&Agrave; la <strong>Une</strong></span>

					<div className="grid-une">
						{allArticles}
					</div>

				</section>
			);

		} else {
			return null;
		}
	}
}

export default ContainerALaUne;