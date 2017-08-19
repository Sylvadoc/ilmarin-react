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
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre?_embed=1&per_page=25";
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livres: res
				})
			});
	}

	render() {

		// construction de la preview
		let livres = this.state.livres.map((livre, index) => {
			return (
				<div className="flex-item" key={index}>
					<article>
						<Link to={"/bibliotheque/" + livre.id + '/' + livre.slug} className="entry-header">
                            {livre._embedded['wp:featuredmedia'] ? <img src={livre._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} alt={"Couverture du livre " + livre.title.rendered} /> : 'pas de couverture' }
							<p><span dangerouslySetInnerHTML={ {__html: livre.title.rendered} }></span></p>
						</Link>
                        {livre._embedded['wp:term'] ? <p className="genre">{livre._embedded['wp:term'][1][0].name}</p> : 'pas de genre' }
						<div className="entry-meta">
							par <Link to={"/profil/" + livre._embedded.author[0].id + '/' + livre._embedded.author[0].slug}>{livre._embedded.author[0].slug}</Link>
						</div>
					</article>
				</div>
			)
		});

		return (
			<section id="last_50" className="liste_ouvrage">
				<div className="row">
					<span className="simili-title">Les derniers ajouts dans la <strong>bibliothèque</strong></span>
					<div className="flex-list">
						{livres}
					</div>
				</div>
			</section>
		);
	}
}

export default ContainerAllChroniques;