// Composant conteneur de la page d'un prix elbakin d'une année donnée
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import ArticlePrixSkeleton from './skeletons/article-prix.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

class ArticlePrixRoot extends Component {

	constructor() {
		super();
		this.state = {
			post: undefined
		}
	}

	componentDidMount() {
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

		if (this.state.post) {

			const post = this.state.post;

			return (
				<div className="page-article">
					<Helmet
						link={[
							getPageCss('article')
						]}
                        title={post.title.rendered + " ~ Elbakin.net"}
					/>
					<ArticlePrixSkeleton post={post} />
				</div>
			)
		}
		else {
			return null;
		}
	}
}

export default ArticlePrixRoot;