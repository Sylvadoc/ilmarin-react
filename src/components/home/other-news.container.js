// Composant Liste de toutes les autres news que celles à la Une
// ==========================================================

import React, { Component } from 'react';

// les composants de la page
import PreviewArticles from '../actualites/preview-list-articles.container'
import PreviewInterviews from '../actualites/preview-list-interviews.container'

export class ContainerOtherNews extends Component {

	render() {

			return (
				<section id="other_news" className="grey-section">
					<div className="row">
						<span className="simili-title">Le reste de <strong>l&rsquo;actualité</strong></span>

						<PreviewArticles categorie={249} />

						<PreviewInterviews categorie={252} />

						<div className="small-12 medium-12 large-4 columns">
							<aside id="chrono">
								<div className="header_chrono">
									<h2><span className="icon icon-clock"></span> chrono</h2>
									<select className="filter-news" id="filter_news" name="filter_news">
										<option value="01">Tout</option>
										<option value="02">La Bataille des cinq armées</option>
										<option value="03">J.R.R. Tolkien</option>
										<option value="04">L'Epouvanteur</option>
									</select>
									<a className="rss" href="/" title="obtenir le flux RSS des news"><span className="icon icon-feed2" aria-hidden="true"></span><span className="text">RSS</span></a>
								</div>
								<div className="scroller_chrono">
									<ul>
										<li><span>16<abbr title="heure">h</abbr>15</span><a href="page_news.html">Game of Thrones saison 5 : nouvel extrait</a></li>
										<li><span>14<abbr title="heure">h</abbr>30</span><a href="page_news.html">Reddit dévoile ses lauréats 2014</a></li>
										<li><span>12<abbr title="heure">h</abbr>18</span><a href="page_news.html">Travis Fimmel parle du tournage de Warcraft</a></li>
										<li><span>09<abbr title="heure">h</abbr>49</span><a href="page_news.html">Baisse de fréquentation pour La Bataille des Cinq Armées</a></li>
										<li><span>07<abbr title="heure">h</abbr>08</span><a href="page_news.html">Pillars of Eternity daté</a></li>
										<li><span>05<abbr title="heure">h</abbr>05</span><a href="page_news.html">Une avalanche d’annonces pour la New Nintendo 3DS</a></li>
										<li><span>23<abbr title="heure">h</abbr>14</span><a href="page_news.html">Scholastic présente sa nouvelle édition illustrée de l’école des sorciers</a></li>
										<li><span>09<abbr title="heure">h</abbr>49</span><a href="page_news.html">Baisse de fréquentation pour La Bataille des Cinq Armées</a></li>
										<li><span>07<abbr title="heure">h</abbr>08</span><a href="page_news.html">Pillars of Eternity daté</a></li>
										<li><span>05<abbr title="heure">h</abbr>05</span><a href="page_news.html">Une avalanche d’annonces pour la New Nintendo 3DS</a></li>
										<li><span>23<abbr title="heure">h</abbr>14</span><a href="page_news.html">Aujourd’hui en salles : “Souvenirs de Marnie”</a></li>
										<li><span>09<abbr title="heure">h</abbr>49</span><a href="page_news.html">108 Rois-Démons : des avis de recherche lancés</a></li>
										<li><span>16<abbr title="heure">h</abbr>15</span><a href="page_news.html">Magic lance son extension “Destin reforgé”</a></li>
									</ul>
								</div>
								<div className="footer_chrono">
									<ul className="pagination-chrono">
										<li><a href="/" title="page précédente"><span className="icon icon-keyboard-arrow-left"></span><span className="text">précédent</span></a></li>
										<li>1 / 10</li>
										<li><a href="/" title="page suivante"><span className="icon icon-keyboard-arrow-right"></span><span className="text">suivant</span></a></li>
									</ul>
									<a className="all-chrono" href="/">Tous les chronos</a>
								</div>
							</aside>
						</div>
					</div>
				</section>
			);
	}
}

export default ContainerOtherNews;