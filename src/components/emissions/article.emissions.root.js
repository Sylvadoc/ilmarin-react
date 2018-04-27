// Composant conteneur de l'article d'une catégorie Emission
// ==============================================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeBurger } from '../../store/action-creators';

// composants
import Header from '../header'
import Footer from '../footer'
import Navigation from '../navigation'
import DesktopArticleEmissionsSkeleton from './skeletons/article.emissions-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

class ArticleEmissionRoot extends Component {

	constructor() {
		super();
		this.state = {
			post: undefined
		}
	}

	componentDidMount() {

		this.props.closeBurger();

		const postId = this.props.match.params.postId;

		// Capture du post X
		let dataPostURL = REST_URL + "/posts";
		fetch(dataPostURL + "/" + postId + "?_embed")
			.then(res => res.json())
			.then(res => {
				this.setState({
					post: res
				})
			});
	}

	render() {

		const { burgerIsDisplayed } = this.props;

		if (this.state.post) {

			const post = this.state.post;
			const postTitle = post.title.rendered;

			return (
				<div className="page-emission">
					<Helmet
						link={[
							getPageCss('emissions')
						]}
						title={ postTitle }
					/>
					<Navigation />
					<div className={"m-scene " + (burgerIsDisplayed ? 'overlay-open lock-overflow' : '')}>
						<Header />
						<main role="main" className="m-page">
							<section id="header_section" className="header_section emission_section">
								<div className="row">
									<div className="small-12 columns">
										<h1 className="global-title">Les émissions</h1>
									</div>
									<DesktopArticleEmissionsSkeleton post={post} />
								</div>
							</section>
						</main>
						<Footer />
					</div>
				</div>
			)
		} else {
			return null;
		}
	}
}

const mapStateToProps = ({ header }) => ({ burgerIsDisplayed: header.burgerIsDisplayed });

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ closeBurger }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEmissionRoot);