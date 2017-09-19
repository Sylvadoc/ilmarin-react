// Composant article d'une catégorie Emission
// ===============================================

// methodes et fonctions react ou associées
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../../action-creators';

// composants
import Header from '../../header'
import Footer from '../../footer'
import Navigation from '../../navigation'

class ArticleEmissionDesktop2Skeleton extends Component {

	componentDidMount() {
		this.props.closeBurger();
	}

	render() {

		const { burgerIsDisplayed, post } = this.props;

		return (
			<div>
				<Navigation />
				<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
					<Header />
					<main role="main" className="m-page">
						<h1 dangerouslySetInnerHTML={ {__html: post.title.rendered} } />
						{post.acf.widget_soundcloud_ou_podomatic && <span dangerouslySetInnerHTML={ {__html: post.acf.widget_soundcloud_ou_podomatic} }></span>}
						{post.acf.widget_de_la_video_youtube && <span dangerouslySetInnerHTML={ {__html: post.acf.widget_de_la_video_youtube} }></span>}
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

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEmissionDesktop2Skeleton);