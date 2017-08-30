// Composant Liste des dernières chroniques sur la Home
// ==========================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerDiscoverNewHome extends Component {

	constructor() {
		super();
		this.state = {
			selected: 0,
			DerniersLivres: []
		};
		this.selectSubnav = this.selectSubnav.bind(this);
	}

	// selectionner un onglet
	selectSubnav(index) {
		this.setState({ selected: index });
	}

	componentDidMount() {

		// appel du json de wordpress consacré aux derniers livres
		let AllLastLivresURL = REST_URL + "/livre?_embed=1&per_page=6";
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

		// construction de la preview des derniers livres chroniqués
		let newLivres = this.state.DerniersLivres.map((livre, index) => {
			return (
				<li className="small-4 medium-3 large-2 columns" key={"derniers-" + index}>
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
					<span className="simili-title">Nos chroniques <strong>fantasy</strong></span>
					<aside id="chroniques" className="small-12 medium-12 large-12 columns">
						<Link className="shadow-btn light-shadow-btn" to="/bibliotheque">Toutes les chroniques</Link>
						<ul className="tabs">
							<li><a onClick={() => this.selectSubnav(0)} className={"btn-tab " + (whichSelected === 0 ? 'active' : '')} href="#new_romans">romans</a></li>
						</ul>
						<div className="row row_tab_all">
							<div className={"row_tab " + (whichSelected === 0 ? 'open' : '')} id="new_romans">
								<ul className="critiques">
									{newLivres}
								</ul>
							</div>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}

export default ContainerDiscoverNewHome;