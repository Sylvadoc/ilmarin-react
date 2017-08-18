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
									<aside className="classement">
										<h2>Par auteur</h2>
										<select id="les_auteurs">
											<optgroup label="A">
												<option value="value_01">Aaron Rachel</option>
												<option value="value_02">Aaronovitch Ben</option>
											</optgroup>
											<optgroup label="B">
												<option value="value_03">Bâchet Jean-Pierre</option>
												<option value="value_04">Bacigalupi Paolo</option>
											</optgroup>
										</select>
										<h3>Dernières mises à jour</h3>
										<ul className="basic_list">
											<li><a href="/">Carta Paul</a></li>
											<li><a href="/">Colin Fabrice</a></li>
											<li><a href="/">Jaworski Jean-Philippe</a></li>
											<li><a href="/">Joyce Graham</a></li>
											<li><a href="/">Lynch Scott</a></li>
											<li><a href="/">Moorcock Michael</a></li>
											<li><a href="/">Page Martin</a></li>
											<li><a href="/">Pevel Pierre</a></li>
											<li><a href="/">Rouaud Antoine</a></li>
											<li><a href="/">Vigot Dominique</a></li>
										</ul>
									</aside>
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