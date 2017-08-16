// Composant Liste des dernières chroniques
// =============================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class ContainerAllChroniques extends Component {

	constructor() {
		super();
		this.state = {
			livres: []
		}
	}

	componentDidMount() {
		// appel du json de wordpress consacré aux livres
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?_embed";
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livres: res
				})
			})
	}

	render() {

		// construction de la chronique
		let livres = this.state.livres.map((livre, index) => {
			return <li key={index}>
				<Link to={"/bibliotheque/" + livre.slug + '-' + livre.id}>{livre.title.rendered}</Link>
			</li>
		});

		return (
			<div>
				<h1>Les dernières chroniques</h1>
				<ul>
					{livres}
				</ul>
			</div>
		);
	}
}


export default ContainerAllChroniques;
