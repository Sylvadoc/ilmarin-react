// Composant conteneur de la page d'un article ou d'une itw
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import GreatPostSkeleton from './skeletons/great-post.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

class GreatPostRoot extends Component {

	constructor() {
		super();
		this.state = {
			post: undefined
		}
	}

	componentDidMount() {

		// recuperation de l'url
		const postId = this.props.match.params.postId;
		//const slug = this.props.match.params.slug;

		// Récupération du post
		let postURL = REST_URL + "/posts/" + postId + "?_embed";
		fetch(postURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					post: res
				})
			});
	}

	render() {

		if (this.state.post !== undefined) {

			const post = this.state.post;

			return (
				<div className="page-article">
					<Helmet
						link={[
							getPageCss('article')
						]}
						title={post.title.rendered + " ~ Elbakin.net"}
					/>
					<GreatPostSkeleton post={post} />
				</div>
			)
		}
		else {
			return null;
		}
	}
}

export default GreatPostRoot;