// Composant Liste de toutes les autres news que celles à la Une
// ==========================================================

import React, { Component } from 'react';

// les composants de la page
import PreviewArticles from '../actualites/preview-list-articles.container'
import PreviewInterviews from '../actualites/preview-list-interviews.container'
import Chrono from '../actualites/chrono-list.container'

export class ContainerOtherNews extends Component {

	render() {

			return (
				<section id="other_news" className="grey-section">
					<div className="row">
						<span className="simili-title">Le reste de <strong>l&rsquo;actualité</strong></span>

						<PreviewArticles categorie={249} />

						<PreviewInterviews categorie={252} />

						<div className="small-12 medium-12 large-4 columns">

							<Chrono categorie={208} />

						</div>
					</div>
				</section>
			);
	}
}

export default ContainerOtherNews;