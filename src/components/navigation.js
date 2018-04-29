// Composant navigation
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { toggleBurger } from '../action-creators';

// composants inherents à la composition de la page
import {InstantSearch, Index, SearchBox, Hits, Configure} from 'react-instantsearch/dom';

// constantes
import { ALGOLIA } from '../constants/api-key'

class Navigation extends Component {

	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<nav id="garde" className={"overlay " + (burgerIsDisplayed ? 'open' : '')}>
				<div className="flex-enhanced-navigation">
					<Link className="nav-logo" to="/">
						<img src="/img/logo_elbakin_nav.png" alt="Elbakin.net" />
					</Link>
					<div className="section-palantir">
                        <div>
                            <InstantSearch appId={ALGOLIA.APP_ID} apiKey={ALGOLIA.API_KEY} indexName={ALGOLIA.INDEX_NAME.LIVRE}>
                                <SearchBox/>
                                <Configure hitsPerPage={5} />
                                <Index indexName={ALGOLIA.INDEX_NAME.LIVRE}>
                                    <Hits />
                                </Index>
                                <Index indexName={ALGOLIA.INDEX_NAME.CYCLE}>
                                    <Hits />
                                </Index>
                            </InstantSearch>
                        </div>
                        <p><strong>Exemples :</strong> <a href="/">Jaworski</a>, <Link to="/auteur/514/pierre-pevel">Pevel</Link>, <a href="/">Le Seigneur des Anneaux</a></p>
						<svg className="algolia" viewBox="0 0 100 100" width="30" height="30" aria-label="Recherche avec (c) Algolia" aria-hidden="true" focusable="false">
							<use xlinkHref="#algolia-mark-black"></use>
						</svg>
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
							<a href="/forum" className="shadow-btn dark-shadow-btn">
                                <svg viewBox="0 0 100 100" width="20" height="20" aria-hidden="true" focusable="false">
                                    <use xlinkHref="#bubbles"></use>
                                </svg>
                                <span>forum</span>
                            </a>
						</div>
					</div>
					<div className="feature-nav">
						<ul>
							<li>
								<div className="feature-section">
									<img src="/img/section_02.jpg" aria-hidden="true" alt="image illustrant la section fantasy" />
									<Link to="/fantasy" className="cartouche">
                                        <div className="inner-cartouche">
                                            <h3>La fantasy</h3>
                                            <p>Découvrir la fantasy, ses origines, ses héros&hellip;</p>
                                        </div>
									</Link>
								</div>
							</li>
							<li>
								<div className="feature-section">
									<img src="/img/section_03.jpg" aria-hidden="true" alt="image illustrant la section bibliothèque" />
									<Link to="/bibliotheque" className="cartouche">
                                        <div className="inner-cartouche">
                                            <h3>Bibliothèque</h3>
                                            <p>Chronique de romans, de bédés, de mangas, de jeux&hellip;</p>
                                        </div>
									</Link>
								</div>
							</li>
							<li>
								<div className="feature-section">
									<img src="/img/section_01.jpg" aria-hidden="true" alt="image illustrant la section Tolkien" />
									<Link to="/tolkien" className="cartouche">
                                        <div className="inner-cartouche">
                                            <h3>J.R.R. Tolkien</h3>
                                            <p>&Eacute;tude de ses &oelig;uvres, sa vie, son univers&hellip;</p>
                                        </div>
									</Link>
								</div>
							</li>
							<li>
								<div className="feature-section">
									<img src="/img/section_04.jpg" aria-hidden="true" alt="image illustrant les émissions" />
                                    <Link to="/emissions" className="cartouche">
                                        <div className="inner-cartouche">
                                            <h3>Les émissions</h3>
                                            <p>Podcasts, Dessine-moi un Dragon, Culture particulière, Procastination</p>
                                        </div>
									</Link>
								</div>
							</li>
						</ul>
					</div>
					<div className="footer-nav">
						<p>&copy; 2000 - 2018 &middot; Elbakin.net / Tous droits réservés.</p>
						<ul className="social">
							<li>
                                <a href="https://www.facebook.com/Elbakin.net" title="Profil Facebook Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 100 100" width="20" height="20" aria-hidden="true" focusable="false" aria-label="Facebook">
                                        <use xlinkHref="#facebook"></use>
                                    </svg>
                                </a>
							</li>
							<li>
                                <a href="https://twitter.com/elbakin" title="Compte Twitter Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 100 100" width="20" height="20" aria-hidden="true" focusable="false" aria-label="Twitter">
                                        <use xlinkHref="#twitter"></use>
                                    </svg>
                                </a>
							</li>
							<li>
                                <a href="https://www.youtube.com/ElbakinNetFantasy" title="Chaîne YouTube Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 100 100" width="20" height="20" aria-hidden="true" focusable="false" aria-label="Youtube">
                                        <use xlinkHref="#youtube2"></use>
                                    </svg>
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ toggleBurger }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);