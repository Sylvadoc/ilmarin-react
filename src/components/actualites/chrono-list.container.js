// Composant Chrono
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

// outils
//import { random } from 'lodash';

export class ContainerChrono extends Component {

	constructor() {
		super();
		this.state = {
			news: [],
			catNews: []
		}
	}

	componentDidMount() {

		// recuperation de l'information idoine
		const { categorie } = this.props;

		// appel du json de wordpress consacré à la catégorie
		let dataCatURL = REST_URL + "/categories";
		// seulement les catégories dont le parent est "actualites"
		fetch(dataCatURL + "?parent=" + categorie + "&_embed=1")
			.then(res => res.json())
			.then(res => {
				this.setState({
					catNews: res
				})
			});

		// appel du json de wordpress consacré aux articles pour tel catégorie
		let dataPostsURL = REST_URL + "/posts";
		// seulement les pages dont le parent est "nos interviews"
		fetch(dataPostsURL + "?categories=" + categorie + "&orderby=date&_embed=1")
			.then(res => res.json())
			.then(res => {
				this.setState({
					news: res
				})
			});
	}

	render() {

		// recuperation de l'information idoine
		const { categorie } = this.props;

		if (this.state.news.length > 0 && this.state.catNews) {

			// construction de la liste de sous cat
			let allUnderCat = this.state.catNews.map((cat, index) => {
				return (
					<option key={"option-cat-" + index} value={cat.id}>{ cat.name }</option>
				)
			});

			// construction de la liste de news
			let allNews = this.state.news.map((post, index) => {
				return (
					<li key={"news-li-" + index}><span>{ post.date }</span><Link to={"/actualites/news/" + post.id + "/" + post.slug} dangerouslySetInnerHTML={ {__html: post.title.rendered} }></Link></li>
				)
			});

			return (
				<aside id="chrono">
					<div className="header_chrono">
						<h2><span className="icon icon-clock"></span> chrono</h2>
						<select className="filter-news" id="filter_news" name="filter_news">
							{ allUnderCat }
						</select>
						<Link className="rss" to="/" title="obtenir le flux RSS des news"><span className="icon icon-feed2" aria-hidden="true"></span><span className="text">RSS</span></Link>
					</div>
					<div className="scroller_chrono">
						<ul>
							{ allNews }
						</ul>
					</div>
					<div className="footer_chrono">
						<ul className="pagination-chrono">
							<li><Link to="/" title="page précédente"><span className="icon icon-keyboard-arrow-left"></span><span className="text">précédent</span></Link></li>
							<li>1 / 10</li>
							<li><Link to="/" title="page suivante"><span className="icon icon-keyboard-arrow-right"></span><span className="text">suivant</span></Link></li>
						</ul>
						<Link className="all-chrono" to={"/actualites/news/" + categorie}>Tous les chronos</Link>
					</div>
				</aside>
			);
		} else {
			return null;
		}
	}
}

export default ContainerChrono;