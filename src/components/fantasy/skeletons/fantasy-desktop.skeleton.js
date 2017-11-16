// Squelette de la page Fantasy : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../action-creators';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'

// special
import HeaderFantasy from './../header-fantasy.container';
import CommencerFantasy from './../commencer-fantasy.container'
import NosEmissions from './../../home/last-emissions.container'

class FantasyDesktop2Skeleton extends Component {

	componentDidMount() {
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						<HeaderFantasy />
						<section id="begin_fantasy" className="grey-section">
							<span className="simili-title">Pour <strong>commencer</strong>&hellip;</span>
							<div className="row">
								<div className="small-12 medium-8 columns">
									<CommencerFantasy/>
								</div>
								<div className="small-12 medium-4 columns">
									<h2>Quelques figures de <em>fantasy</em></h2>
									<article className="article_focus">
										<div className="inner_content">
											<a href="/">
												<img src="images/illustrations/elric.jpg" alt="Elric" />
												<p><span>Elric de Melnibonë</span></p>
											</a>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
												tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
												quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat.</p>
										</div>
									</article>
								</div>
							</div>
						</section>
						<hr className="section-jump" />
						<NosEmissions/>
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

export default connect(mapStateToProps, mapDispatchToProps)(FantasyDesktop2Skeleton);