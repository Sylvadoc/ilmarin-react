// Composant header
// =============================================

// generation de la page
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom'
import { toggleBurger } from '../action-creators';

// composants inherents à la composition de la page
let lastScrollTop = 0;
let delta = 5;

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			headerVisibility: true
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	// SCROLL
	handleScroll() {
		let st = window.pageYOffset;
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		if (st > lastScrollTop && st > 190) {
			// Scroll Down
			this.setState({ headerVisibility: false });
		} else {
			// Scroll Up
			this.setState({ headerVisibility: true });
		}
		lastScrollTop = st;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {

		const { page } = this.props;
		const headerClasses = `the-header m-header ${this.state.headerVisibility ? ' header-visible' : ' header-invisible'}`;

		let brand;
		if (page === 'page-home') {
			brand =
				<div className="branding appear" role="heading">
					<div className="logotype">
						<img src="/img/logo_elbakin.png" alt="Elbakin.net, la fantasy au quotiden" />
					</div>
					<div className="elbakin">
						<img src="/img/elbakin_txt.png" alt="Elbakin.net" />
					</div>
				</div>;
		} else {
			brand =
				<div className="branding appear" role="heading">
					<div className="logotype">
						<a href="/">
							<img src="/img/logo_elbakin.png" alt="Elbakin.net, la fantasy au quotiden" />
						</a>
					</div>
					<div className="elbakin">
						<img src="/img/elbakin_txt.png" alt="Elbakin.net" />
					</div>
				</div>;
		}

		return (
			<header role="banner" className={headerClasses}>
				<div className="inner-wrap">
					{brand}
					<ul className="visit">
						<li>
							<button className="menu-trigger" id="trigger" title="Parcourir le menu du site" onClick={this.props.toggleBurger}>
								<span className="icon icon-burger" aria-hidden="true"></span>
								<span>Explorer</span>
							</button>
						</li>
						<li>
							<a href="/forum" title="Visiter le forum">
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ toggleBurger }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);