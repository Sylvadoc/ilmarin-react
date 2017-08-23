// Composant Liste des dernières chroniques
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerDiscoverAlso extends Component {

	constructor() {
		super();
		this.state = {
			livresParGenre: [],
			DerniersLivres: []
		}
	}

	componentDidMount() {

		const { genre } = this.props;

		// appel du json de wordpress consacré aux livres du même genre
		let AllLivresParGenreURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?genre=" + genre + "&_embed=1&per_page=6";
		fetch(AllLivresParGenreURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livresParGenre: res
				})
			});

		// appel du json de wordpress consacré aux derniers livres
		let AllLastLivresURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?_embed=1&per_page=6";
		fetch(AllLastLivresURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					DerniersLivres: res
				})
			});
	}

	render() {

		// construction de la preview des livres du même genre
		let livresGenre = this.state.livresParGenre.map((livre, index) => {
			return (
				<li className="small-4 medium-3 large-2 columns" key={"pargenre-" + index}>
					<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>
						{livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} /> : 'pas de couverture' }
					</Link>
					<span></span>
					<p><em>(Bilbo) le hobbit</em> est sans doute l’un des livres de fantasy les plus célèbres et les plus lus au monde.<br />Sauf qu’en vérité, ce n’est pas un livre qui se lit ; c’est un conte que se laisse écouter, suspendu au discours bienveillant de l’auteur qui nous fait la grâce de ses commentaires. Il arrivera fréquemment que le lecteur soit directement l’interlocuteur attentif d’un narrateur omniscient qui ne dévoile que ce qu’il convient de savoir.</p>
				</li>
			)
		});

		// construction de la preview des derniers livres chroniqués
		let derniersLivres = this.state.DerniersLivres.map((livre, index) => {
			return (
				<li className="small-4 medium-3 large-2 columns" key={"pargenre-" + index}>
					<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>
						{livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} /> : 'pas de couverture' }
					</Link>
					<span></span>
					<p><em>(Bilbo) le hobbit</em> est sans doute l’un des livres de fantasy les plus célèbres et les plus lus au monde.<br />Sauf qu’en vérité, ce n’est pas un livre qui se lit ; c’est un conte que se laisse écouter, suspendu au discours bienveillant de l’auteur qui nous fait la grâce de ses commentaires. Il arrivera fréquemment que le lecteur soit directement l’interlocuteur attentif d’un narrateur omniscient qui ne dévoile que ce qu’il convient de savoir.</p>
				</li>
			)
		});

		return (
			<section id="all_new_chronique" className="jeff">
				<div className="row">
					<span className="simili-title"><strong>&Agrave; découvrir</strong> également</span>
					<aside id="chroniques" className="small-12 medium-12 large-12 columns">
						<div className="desc_crit">
							<h2 className="h2_like">titre du livre</h2>
							<p className="desc_item">description du livre</p>
						</div>
						<Link className="shadow-btn light-shadow-btn" to="/bibliotheque">Toutes les chroniques</Link>
						<ul className="tabs">
							<li><a className="active" href="#par_genre">Du même genre</a></li>
							<li><a href="#dernieres_chroniques">Les dernières chroniques</a></li>
						</ul>
						<div className="row row_tab_all">
							<div className="row_tab open" id="par_genre">
								<ul className="critiques">
									{livresGenre}
								</ul>
							</div>
							<div className="row_tab" id="dernieres_chroniques">
								<ul className="critiques">
									{derniersLivres}
								</ul>
							</div>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}

export default ContainerDiscoverAlso;