// Squelette de la page Bibliotheque : version desktop
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
import HeaderBiblio from './../header-bibliotheque.container';
import ContainerAllChroniques from './../list-all-chroniques.container';
import ContainerListAllGenres from './../list-all-by-genre.container'
import ContainerListAllThemes from './../list-all-by-theme.container'
import ContainerListAllAuthors from './../list-all-authors.container'

class BibliothequeDesktop2Skeleton extends Component {

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

						<HeaderBiblio />

						<section id="classement">
							<div className="row">
								<span className="simili-title"><strong>Rechercher</strong> un livre</span>
								<div className="small-12 medium-6 large-4 columns">
									<ContainerListAllGenres />
								</div>
								<div className="small-12 medium-6 large-4 columns">
									<ContainerListAllThemes />
								</div>
								<div className="small-12 medium-12 large-4 columns">
									<ContainerListAllAuthors />
								</div>
							</div>
						</section>

						<ContainerAllChroniques />

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

export default connect(mapStateToProps, mapDispatchToProps)(BibliothequeDesktop2Skeleton);