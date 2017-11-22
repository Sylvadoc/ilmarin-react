// Composant header
// =============================================

// generation de la page
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleBurger } from '../action-creators';

class Header extends Component {

	render() {

		const { page } = this.props;

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
			<header role="banner" className="the-header m-header">
				{brand}
				<div className="the-header__container">
					<div className="the-header__container-inner">
						<div className="the-header__container-inner-part-one">
							<span role="button" className="menu-trigger" id="trigger" title="Parcourir le menu du site" onClick={this.props.toggleBurger}>
								<span className="icon icon-burger" aria-hidden="true"></span>
								<span>Explorer</span>
							</span>
							<a href="/forum" className="btn-forum" title="Visiter le forum">
								<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true" focusable="false">
									<use xlinkHref="#bubbles"></use>
								</svg>
								<span>Forum</span>
							</a>
						</div>
						<div className="the-header__container-inner-part-two">
							<ul className="social">
								<li>
									<a href="https://www.facebook.com/Elbakin.net" title="Profil Facebook Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true" focusable="false" aria-label="Facebook">
											<use xlinkHref="#facebook"></use>
										</svg>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/elbakin" title="Compte Twitter Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true" focusable="false" aria-label="Twitter">
											<use xlinkHref="#twitter"></use>
										</svg>
									</a>
								</li>
								<li>
									<a href="https://www.youtube.com/ElbakinNetFantasy" title="Chaîne YouTube Elbakin.net [nouvelle fenêtre]" target="_blank" rel="noopener noreferrer">
										<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true" focusable="false" aria-label="Youtube">
											<use xlinkHref="#youtube2"></use>
										</svg>
									</a>
								</li>
							</ul>
							<Link to="/compte/" className="btn-compte">
								<span>Se connecter</span>
								<svg viewBox="0 0 100 100" width="30" height="30" aria-hidden="true" focusable="false" aria-label="Youtube">
									<use xlinkHref="#user"></use>
								</svg>
							</Link>
						</div>
					</div>
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