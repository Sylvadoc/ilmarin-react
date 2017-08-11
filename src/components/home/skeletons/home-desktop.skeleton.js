// Squelette de la page Home : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'

class HomeDesktop2Skeleton extends Component {
	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main>
						page home
					</main>
					<Footer />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

export default connect(mapStateToProps)(HomeDesktop2Skeleton);