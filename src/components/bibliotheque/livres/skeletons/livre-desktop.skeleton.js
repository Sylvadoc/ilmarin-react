// Squelette de la page Livre : version desktop
// =============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../../action-creators';

// composants
import Header from '../../../header'
import Footer from '../../../footer'
import Navigation from '../../../navigation'

// special

class LivreDesktop2Skeleton extends Component {

	componentDidMount() {
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed, item } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						page du livre {item.title.rendered}
						<ul>
							{item._embedded['wp:featuredmedia'] && <li><img src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="*" /></li> }
							<li>Extrait : <div dangerouslySetInnerHTML={ {__html: item.excerpt.rendered} } /></li>
							<li>Format : {item.acf.format}</li>
							<li>&Eacute;diteur : {item.acf.editeur}</li>
							<li>Collection : {item.acf.collection}</li>
							<li>Illustration : {item.acf.illustration}</li>
							<li>Traduction : {item.acf.traduction}</li>
							<li>ISBN : {item.acf.isbn_13}</li>
							<li>Note : {item.acf.note} / 10</li>
						</ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(LivreDesktop2Skeleton);