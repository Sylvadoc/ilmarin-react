// Composant Liste des dernières chroniques sur la Home
// ==========================================================

import React, { Component } from 'react';

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
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/categories";
		// seulement les pages dont le parent est "nos émissions"
		fetch(dataURL + "?parent=163&orderby=count")
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