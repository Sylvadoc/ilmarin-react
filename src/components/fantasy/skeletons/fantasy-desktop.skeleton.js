// Squelette de la page Fantasy : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'

class FantasyDesktop2Skeleton extends Component {
	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main>
						page section fantasy
					</main>
					<Footer />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

export default connect(mapStateToProps)(FantasyDesktop2Skeleton);