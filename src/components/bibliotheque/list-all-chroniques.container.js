// Composant Liste des critères
// =============================================

import React, { Component } from 'react';

export class ContainerAllChroniques extends Component {

	constructor() {
		super();
		// définition de l'état par défaut du composant
		this.state = {
			// on stocke toutes les infos du livre dans ce tableau
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
					// on remplit l'état du composant par la réponse du json
					livres: res
				})
			})
	}

	render() {

		// construction de la chronique
		let livres = this.state.livres.map((livre, index) => {
			return <li key={index}>
				<h2>{livre.title.rendered}</h2>
				<ul>
					{livre._embedded['wp:featuredmedia'] && <li><img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} /></li> }
					<li>Extrait : <div dangerouslySetInnerHTML={ {__html: livre.excerpt.rendered} } /></li>
					<li>Format : {livre.acf.format}</li>
					<li>&Eacute;diteur : {livre.acf.editeur}</li>
					<li>Collection : {livre.acf.collection}</li>
					<li>Illustration : {livre.acf.illustration}</li>
					<li>Traduction : {livre.acf.traduction}</li>
					<li>ISBN : {livre.acf.isbn_13}</li>
					<li>Note : {livre.acf.note} / 10</li>
				</ul>
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
