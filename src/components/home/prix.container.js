// Composant Liste des résultats du prix Elbakin.net
// ==========================================================

import React, { Component } from 'react';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

// composants
import PreviewPrixContainer from '../prix-elbakin/preview-prix.container'

export class ContainerDiscoverPrix extends Component {

	constructor() {
		super();
		this.state = {
			catPrixElbakin: [],
			sousCatPrixElbakin: []
		}
	}

	componentDidMount() {

		// appel du json de wordpress consacré aux pages
		let dataPrixSsCatURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "Le prix Elbakin.net"
		fetch(dataPrixSsCatURL + "?parent=228&_embed=1&orderby=count")
			.then(res => res.json())
			.then(res => {
				this.setState({
					sousCatPrixElbakin: res
				})
			});

		// appel du json de la catégorie "prix elbakin.net"
		let dataPrixURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "Le prix Elbakin.net"
		fetch(dataPrixURL + "/228?_embed")
			.then(res => res.json())
			.then(res => {
				this.setState({
					catPrixElbakin: res
				})
			});

	}

	render() {

		if (this.state.sousCatPrixElbakin.length > 0 && this.state.catPrixElbakin) {

			const catDesc = this.state.catPrixElbakin.description;

			// construction de la preview des différentes pages associatives
			let listePrix = this.state.sousCatPrixElbakin.map((categorie, index) => {
				return (
					<PreviewPrixContainer key={"prix-ek-" + index} categorie={categorie.id} />
				)
			});

			return (
				<section id="prix_elbakin_net">
					<div className="row clearfix">
						<span className="simili-title">Le Prix <strong>Elbakin.net</strong></span>
						<div className="small-12 medium-12 large-12 columns description-categorie">
							<p>{catDesc}</p>
						</div>
						<ul className="all_prices">
							{listePrix}
						</ul>
					</div>
				</section>
			);

		} else {
			return null;
		}
	}
}

export default ContainerDiscoverPrix;