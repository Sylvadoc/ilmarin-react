// Squelette de la page Home : version desktop
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
import LastNewItemBiblio from '../discover-new-bibliotheque.container'
import DiscoverAssociation from '../discover-association.container'

class HomeDesktop2Skeleton extends Component {

	componentDidMount() {
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed } = this.props;
		const page = "page-home";

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header page={page} />
					<main role="main" className="m-page">
						<LastNewItemBiblio />
						<DiscoverAssociation />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeDesktop2Skeleton);