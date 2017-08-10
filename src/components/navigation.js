// Composant navigation
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

// composants inherents à la composition de la page


class Navigation extends Component {
	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<nav id="garde" className={"overlay " + (burgerIsDisplayed ? 'open lock-overflow' : '')}>
				<div className="flex-enhanced-navigation">
					<button className="menu-close" title="Fermer le menu"><span className="icon icon-cross"></span></button>
					<div className="nav-logo">
						<img src="/img/logo_elbakin_nav.png" alt="Elbakin.net" />
					</div>
					<div className="section-palantir">
						<form className="form">
							<div className="s-l">
								<input type="text" id="search-keyword" />
								<label htmlFor="search-keyword">Rechercher sur le site :</label>
							</div>
							<div className="s-r">
								<button className="btn btn_find inline_btn"><span className="icon icon-search"></span><span className="text-icon">rechercher</span></button>
							</div>
							<p><strong>Exemples :</strong> <a href="/">Jaworski</a>, <a href="/">Pevel</a>, <a href="/">Le Seigneur des Anneaux</a></p>
						</form>
					</div>
					<div className="nav-second">
						<ul className="classic-nav" role="navigation">
							<li className="node"><strong>La fantasy</strong>
								<ul>
									<li><Link to="/fantasy">Présentations &amp; courants</Link></li>
									<li><Link to="/fantasy">Approfondir</Link></li>
								</ul>
							</li>
							<li className="node"><strong>Bibliothèque</strong>
								<ul>
									<li><Link to="/bibliotheque">Les romans</Link></li>
									<li><Link to="/bibliotheque">Les bandes dessinées</Link></li>
									<li><Link to="/bibliotheque">Les mangas</Link></li>
									<li><Link to="/bibliotheque">Les jeux</Link></li>
								</ul>
							</li>
							<li className="node"><strong>J.R.R. Tolkien</strong>
								<ul>
									<li><Link to="/tolkien">Découvrir &amp; Comprendre</Link></li>
									<li><Link to="/tolkien">Bibliographie</Link></li>
									<li><Link to="/tolkien">Divertissements &amp; adaptations</Link></li>
								</ul>
							</li>
							<li className="node"><strong>Les émissions</strong>
								<ul>
									<li><Link to="/emissions">Les podcasts d'Elbakin.net</Link></li>
									<li><Link to="/emissions">Dessine-moi un dragon</Link></li>
									<li><Link to="/emissions">Culture particulière</Link></li>
									<li><Link to="/emissions">Procastination</Link></li>
								</ul>
							</li>
							<li className="node"><strong>Notre réseau</strong>
								<ul>
									<li><a href="http://association-elbakin.net/" title="Le site de l'association [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">L'association Elbakin.net</a></li>
									<li><a href="http://archibald-bellerophon.blogspot.fr/" title="Archibald [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">Archibald Bellérophon</a></li>
								</ul>
							</li>
						</ul>
						<div className="aside-btn">
							<a href="/forum" className="shadow-btn dark-shadow-btn"><span className="icon icon-bubbles" aria-hidden="true"></span> forum</a>
						</div>
					</div>
					<div className="feature-nav">
						<ul>
							<li>
								<div className="feature-section clickable">
									<img src="/img/illustrations/section_02.jpg" aria-hidden="true" alt="image illustrant la section fantasy" />
									<div className="cartouche">
										<h3><Link to="/fantasy">La fantasy</Link></h3>
										<p>Découvrir la fantasy, ses origines, ses héros&hellip;</p>
									</div>
								</div>
							</li>
							<li>
								<div className="feature-section clickable">
									<img src="/img/illustrations/section_03.jpg" aria-hidden="true" alt="image illustrant la section bibliothèque" />
									<div className="cartouche">
										<h3><Link to="/bibliotheque">Bibliothèque</Link></h3>
										<p>Chronique de romans, de bédés, de mangas, de jeux&hellip;</p>
									</div>
								</div>
							</li>
							<li>
								<div className="feature-section clickable">
									<img src="/img/illustrations/section_01.jpg" aria-hidden="true" alt="image illustrant la section Tolkien" />
									<div className="cartouche">
										<h3><Link to="/tolkien">J.R.R. Tolkien</Link></h3>
										<p>&Eacute;tude de ses &oelig;uvres, sa vie, son univers&hellip;</p>
									</div>
								</div>
							</li>
							<li>
								<div className="feature-section clickable">
									<img src="/img/illustrations/section_04.jpg" aria-hidden="true" alt="image illustrant les émissions" />
									<div className="cartouche">
										<h3><Link to="/emissions">Les émissions</Link></h3>
										<p>Podcasts, Dessine-moi un Dragon, Culture particulière, Procastination</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="footer-nav">
						<p>&copy; 2000 - 2018 &middot; Elbakin.net / Tous droits réservés.</p>
						<ul className="social">
							<li>
								<a href="https://www.facebook.com/Elbakin.net" title="Profil Facebook Elbakin.net [Nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-facebook" aria-hidden="true"></span>
									<span className="text">Facebook</span>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/elbakin" title="Compte Twitter Elbakin.net [Nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-twitter" aria-hidden="true"></span>
									<span className="text">Twitter</span>
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/ElbakinNetFantasy" title="Chaîne YouTube Elbakin.net [Nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
									<span className="icon icon-google-plus" aria-hidden="true"></span>
									<span className="text">YouTube</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

export default connect(mapStateToProps)(Navigation);