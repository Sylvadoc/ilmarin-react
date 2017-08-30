// Composant Bloc définition de l'association sur la Home
// ==========================================================

import React, { Component } from 'react';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { REST_URL } from '../../constants/pathname'

export class ContainerDiscoverAssociation extends Component {

	constructor() {
		super();
		this.state = {
			pagesAssociation: []
		}
	}

	componentDidMount() {

		// appel du json de wordpress consacré aux pages
		let dataURL = REST_URL + "/pages";
		// seulement les pages dont le parent est "L'association"
		fetch(dataURL + "?parent=561&orderby=menu_order")
			.then(res => res.json())
			.then(res => {
				this.setState({
					pagesAssociation: res
				})
			});
	}

	render() {

		// construction de la preview des différentes pages associatives
		let descAssociation = this.state.pagesAssociation.map((page, index) => {
			return (
				<div className="flex-item" key={"page-asso-" +index}>
					<aside className="some_card">
						<span className={"icon icon-" + page.slug}></span>
						<h2><a href="http://www.association-elbakin.net/" target="_blank" rel="noopener noreferrer"><span dangerouslySetInnerHTML={ {__html: page.title.rendered} }></span></a></h2>
						<div dangerouslySetInnerHTML={ {__html: page.content.rendered} } />
					</aside>
				</div>
			)
		});

		return (
			<section id="association">
				<div className="row clearfix">
					<span className="simili-title">L'<strong>Association</strong></span>
					<div className="flex-list">
						{descAssociation}
					</div>
					<a className="btn btn_default" href="http://www.association-elbakin.net/" target="_blank" rel="noopener noreferrer"><span className="icon icon-keyboard-arrow-right"></span> Adhérer à l'association</a>
				</div>
			</section>
		);
	}
}

export default ContainerDiscoverAssociation;