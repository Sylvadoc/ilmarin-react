// Composant Liste des dernières chroniques
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerDiscoverAlso extends Component {

	constructor() {
		super();
		this.state = {
			selected: 0,
			livresParGenre: [],
			DerniersLivres: []
		};
		this.selectSubnav = this.selectSubnav.bind(this);
		this.viewDetailPreview = this.viewDetailPreview.bind(this);
	}

	// selectionner un onglet
	selectSubnav(index) {
		this.setState({ selected: index });
	}

	viewDetailPreview(e) {
		let element = e.target;
		console.log('hover', element);
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

		let whichSelected = this.state.selected;

		// construction de la preview des livres du même genre
		let livresGenre = this.state.livresParGenre.map((livre, index) => {
			return (
				<li className="small-4 medium-3 large-2 columns" key={"pargenre-" + index} onMouseEnter={(e) => this.viewDetailPreview(e)}>
					<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>
						{livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} className="preview-cover" /> : 'pas de couverture' }
					</Link>
					<span></span>
					<div dangerouslySetInnerHTML={ {__html: livre.excerpt.rendered} } />
				</li>
			)
		});

		// construction de la preview des derniers livres chroniqués
		let derniersLivres = this.state.DerniersLivres.map((livre, index) => {
			return (
				<li className="small-4 medium-3 large-2 columns" key={"derniers-" + index} onMouseEnter={(e) => this.viewDetailPreview(e)}>
					<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug}>
						{livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} className="preview-cover" /> : 'pas de couverture' }
					</Link>
					<span></span>
					<div dangerouslySetInnerHTML={ {__html: livre.excerpt.rendered} } />
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
							<li><a onClick={() => this.selectSubnav(0)} className={"btn-tab " + (whichSelected === 0 ? 'active' : '')} href="#par_genre">Du même genre</a></li>
							<li><a onClick={() => this.selectSubnav(1)} className={"btn-tab " + (whichSelected === 1 ? 'active' : '')} href="#dernieres_chroniques">Les dernières chroniques</a></li>
						</ul>
						<div className="row row_tab_all">
							<div className={"row_tab " + (whichSelected === 0 ? 'open' : '')} id="par_genre">
								<ul className="critiques">
									{livresGenre}
								</ul>
							</div>
							<div className={"row_tab " + (whichSelected === 1 ? 'open' : '')} id="dernieres_chroniques">
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