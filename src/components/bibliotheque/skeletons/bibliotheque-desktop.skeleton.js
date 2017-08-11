// Squelette de la page Bibliotheque : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'
import ContainerAllChroniques from './../list-all-chroniques.container';

class BibliothequeDesktop2Skeleton extends Component {
	render() {

		const { burgerIsDisplayed } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main>
						page section bibliotheque
						<ContainerAllChroniques />
					</main>
					<Footer />
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

export default connect(mapStateToProps)(BibliothequeDesktop2Skeleton);