// Squelette de la page article ou interview
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../action-creators';

// outils
import moment from 'moment';
import 'moment/locale/fr';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'

class GreatPostSkeleton extends Component {

	componentDidMount() {
		// fermeture préventive de la navigation
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed, post } = this.props;

		// background image
		const bgImage = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : '';
		const bgStyle = {
			backgroundImage: 'url(' + bgImage + ')'
		};

		// construction de la date
		moment.locale('fr');
		const newsDate = moment(post.date).format("LLL");

		return (
			<div className={"format-" + post.format}>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">

						<article className="main_article" itemScope itemType="http://schema.org/Article">

							<div className="header_article" style={bgStyle}>
								<div className="header_inner">
									<h1 className="the-title" itemProp="name" dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
									<p className="a-propos">Le <time itemProp="dateCreated" dateTime={post.date_gmt}>{newsDate}</time> par <em itemProp="creator">{post._embedded['author'][0].name}</em></p>
								</div>
							</div>

							<div className="row">

								<div className="small-12 medium-8 large-offset-1 large-7 columns">
									<section itemProp="articleBody" className="body-article">
										<div dangerouslySetInnerHTML={ {__html: post.content.rendered} } />
									</section>
								</div>

								<div className="small-12 medium-4 large-3 columns">

									<aside id="linked" className="sidebar_card to_be_fixed">
										<h2><span className="icon icon-heart"></span> Vous aimerez aussi</h2>
										<ul className="basic_list">
											<li><a href="/">Les cartes en fantasy</a></li>
											<li><a href="/">Scott Lynch</a></li>
											<li><a href="/">Les Salauds Gentilshommes</a></li>
											<li><a href="/">Fluctuat Nec Mergitur</a></li>
											<li><a href="/">Le Communisme et les schtroumpfs</a></li>
										</ul>
									</aside>

								</div>

							</div>
						</article>

					</main>
					<Footer />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ closeBurger }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GreatPostSkeleton);