// Squelette de la page Tolkien : version desktop
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
import HeaderTolkien from './../header-tolkien.container';
import EssaisListTolkien from './../essais-list.container';
import ArticlesListTolkien from './../articles-list.container';
import IntroductionTolkien from "./../introduction-tolkien.container";
import TraductionTolkien from "./../traduction-tolkien.container";
import DiscoverTolkienLibrary from "../discover-tolkien-bibliotheque.container";

class TolkienDesktop2Skeleton extends Component {

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
					<main className="m-page">
						<HeaderTolkien />
                        <section id="tolkien_thoughts" className="grey-section">
                            <span className="simili-title"> Découvrir <span className="amp">&amp;</span> <strong>Comprendre</strong></span>
                            <div className="row">
                                <EssaisListTolkien categorie={273} />
                                <ArticlesListTolkien categorie={274} />
                                <div className="small-12 medium-12 large-4 columns">
                                    <IntroductionTolkien categorie={275} />
                                    <TraductionTolkien categorie={276} />
                                </div>
                            </div>
                        </section>
                        <DiscoverTolkienLibrary />
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

export default connect(mapStateToProps, mapDispatchToProps)(TolkienDesktop2Skeleton);