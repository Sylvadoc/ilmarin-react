// Composant header
// =============================================

// generation de la page
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// composants inherents à la composition de la page

class Header extends Component {
	render() {
		return (
			<header role="banner" className="the-header m-header">
				<div className="inner-wrap">
					<div className="branding appear" role="heading">
						<div className="logotype">
							<Link to="/">
								<img src="/img/logo_elbakin.png" alt="Elbakin.net, la fantasy au quotiden" />
							</Link>
						</div>
						<div className="elbakin">
							<img src="/img/elbakin_txt.png" alt="Elbakin.net" />
						</div>
					</div>
					<ul className="visit">
						<li>
							<a href="/" className="menu-trigger" id="trigger" title="Parcourir le menu du site">
								<span className="icon icon-burger" aria-hidden="true"></span>
								<span>Explorer</span>
							</a>
						</li>
						<li>
							<a href="#" title="Visiter le forum">
								<span className="icon icon-bubbles" aria-hidden="true"></span>
								<span>Forum</span>
							</a>
						</li>
					</ul>
					<ul className="aside_menu">
						<li>
							<ul className="social">
								<li>
									<a href="https://www.facebook.com/Elbakin.net" title="Profil Facebook Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<span className="icon icon-facebook" aria-hidden="true"></span>
										<span className="text">Facebook</span>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/elbakin" title="Compte Twitter Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<span className="icon icon-twitter" aria-hidden="true"></span>
										<span className="text">Twitter</span>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/ElbakinNetFantasy" title="Chaîne YouTube Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<span className="icon icon-google-plus" aria-hidden="true"></span>
										<span className="text">YouTube</span>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="form_inscription.html" title="Se connecter au site">
								<span>Se connecter</span>
								<span className="icon icon-user" aria-hidden="true"></span>
							</a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}
export default Header;