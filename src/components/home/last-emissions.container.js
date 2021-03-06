// Composant Liste de toutes les émissions sur la Home
// ==========================================================

import React, { Component } from 'react';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

// composants
import PreviewEmissionContainer from '../emissions/preview-emission.container'

export class ContainerLastEmissions extends Component {

	constructor() {
		super();
		this.state = {
			catEmissions: []
		}
	}

	componentDidMount() {

		// appel du json de wordpress consacré aux catégories
		let dataURL = REST_URL + "/categories";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataURL + "?parent=163&order=desc")
			.then(res => res.json())
			.then(res => {
				this.setState({
					catEmissions: res
				})
			});
	}

	render() {

		if (this.state.catEmissions) {

			// construction du cartouche des différentes catégories
			let allEmissions = this.state.catEmissions.map((emission, index) => {
				return (
					<PreviewEmissionContainer categorie={emission.id} key={"container-emission-" + index} />
				)
			});

			return (
				<section id="emissions">
					<div className="row">
						<span className="simili-title">Nos <strong>émissions</strong></span>
						<div className="flex-list">
							{allEmissions}
						</div>
					</div>
				</section>
			);

		} else {

			return null;

		}
	}
}

export default ContainerLastEmissions;