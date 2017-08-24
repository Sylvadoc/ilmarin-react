// Composant Liste des dernières chroniques sur la Home
// ==========================================================

import React, { Component } from 'react';

export class ContainerLastEmissions extends Component {

	constructor() {
		super();
		this.state = {
			catEmissions: [],
			catPodcast: []
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

		// construction de la preview des différentes catégories
		let allEmissions = this.state.catEmissions.map((emission, index) => {

			return (
				<aside id={"categorie-" + emission.slug} className="small-12 medium-6 large-3 columns" key={"cat-em-" + index}>
					<h2><span className={"icon icon-podcast icon-" + emission.slug}></span> {emission.name}</h2>
					<article className="article_focus">
						<div className="inner_content">
							<a href="/">
								<img src="/img/illustrations/combat.jpg" alt="ALT" />
								<p><span>1er art de la cat {emission.name}</span></p>
							</a>
						</div>
						<h3>Les derniers podcasts :</h3>
						<ul>
							<li><a href="/">Liste du reste des articles</a></li>
						</ul>
					</article>
				</aside>
			)
		});

		return (
			<section id="emissions">
				<div className="row">
					<span className="simili-title">Nos <strong>émissions</strong></span>
					{allEmissions}
				</div>
			</section>
		);
	}
}

export default ContainerLastEmissions;