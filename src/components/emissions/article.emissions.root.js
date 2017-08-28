// Composant conteneur de l'article d'une catégorie Emission
// ==============================================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopArticleEmissionsSkeleton from './skeletons/article.emissions-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';

class ArticleEmissionRoot extends Component {

	constructor() {
		super();
		this.state = {
			post: undefined
		}
	}

	componentDidMount() {
		const postId = this.props.match.params.postId;

		// Capture du post X
		let dataPostURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/posts";
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
			const postTitle = post.title.rendered;

			return (
				<div className="page-emission">
					<Helmet
						link={[
							getPageCss('emissions')
						]}
						title={ postTitle }
					/>
					<DesktopArticleEmissionsSkeleton post={post} />
				</div>
			)
		} else {
			return null;
		}
	}
}
export default ArticleEmissionRoot;