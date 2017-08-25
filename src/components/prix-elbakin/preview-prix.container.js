// Composant prix elbakin.net d'une année
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerYearPrix extends Component {

	constructor() {
		super();
		this.state = {
			postsPrix: [],
			catPrix: undefined
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
					catPrix: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/posts";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1&per_page=6")
			.then(res => res.json())
			.then(res => {
				this.setState({
					postsPrix: res
				})
			});

	}

	render() {

		if (this.state.postsPrix.length > 0 && this.state.catPrix) {

			const posts = this.state.postsPrix;
			const catName = this.state.catPrix.name;

			return (
				<li>
					<div className="le-prix">
						<div className="contenu-prix">
							{posts[0]._embedded['wp:featuredmedia'] ? <img src={posts[0]._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={posts[0]._embedded['wp:featuredmedia'][0].alt_text} /> : 'pas de couverture' }
							<div className="detail_price">
								<h3>{catName}</h3>
								<em><Link to={"/prix-elbakin/" + posts[0].id + "/" + posts[0].slug}>Voir le détail</Link></em>
							</div>
						</div>
					</div>
				</li>
			);
		} else {
			return null;
		}
			
	}
}

export default ContainerYearPrix;