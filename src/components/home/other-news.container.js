// Composant Liste de toutes les autres news que celles à la Une
// ==========================================================

import React, { Component } from 'react';

// constantes, variables, fonctions utiles à la bonne confection de la page
//import { REST_URL } from '../../constants/pathname'

export class ContainerOtherNews extends Component {

	render() {

			return (
				<section id="other_news" className="grey-section">
					<div className="row">
						<span className="simili-title">Le reste de <strong>l&rsquo;actualité</strong></span>
						<aside id="articles" className="small-12 medium-6 large-4 columns">
							<article className="article_focus">
								<div className="inner_content">
									<a href="/">
										<img src="img/illustrations/lotro.jpg" alt="Lotro" />
										<p><span>Feuilleton Lotro,<br />En route vers le sud !</span></p>
									</a>
								</div>
							</article>
							<h2>Nos articles :</h2>
							<ul>
								<li><a href="page_article_itw.html">Elbakin.net fête ses quatorze ans d'existence</a></li>
								<li><a href="page_article_itw.html">La Horde du Contrevent fête ses 10 ans !</a></li>
								<li><a href="page_article_itw.html">La Route de la Soie de la fantasy</a></li>
								<li><a href="page_article_itw.html">Ce que le Trône de Fer doit à J.R.R. Tolkien</a></li>
								<li><a href="page_article_itw.html">Elf! The party is back</a></li>
							</ul>
						</aside>

						<aside id="itws" className="small-12 medium-6 large-4 columns">
							<article className="article_focus">
								<div className="inner_content">
									<a href="/">
										<img src="img/illustrations/prix.jpg" alt="Soirée prix" />
										<p><span>La soirée du Prix Elbakin.net 2014 !</span></p>
									</a>
								</div>
							</article>
							<h2>Nos interviews :</h2>
							<ul>
								<li><a href="/">Kamui Fujiwara, auteur de Dragon Quest : Emblem of Roto</a></li>
								<li><a href="/">Imaginales 2014, un entretien avec Olivier Gay</a></li>
								<li><a href="/">Imaginales 2014, un entretien avec Victor Dixen</a></li>
								<li><a href="/">Joe Abercrombie répond aux questions d'Elbakin.net</a></li>
								<li><a href="/">Un entretien avec Pierre Pevel sur Haut-Royaume</a></li>
							</ul>
						</aside>
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