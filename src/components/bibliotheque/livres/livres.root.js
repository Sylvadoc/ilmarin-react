// Composant conteneur de la page Livre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopSkeleton from './skeletons/livre-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../../utils/helmet';

class LivreRoot extends Component {

	constructor() {
		super();
		this.state = {
			livre: undefined
		}
	}

	componentDidMount() {
		const itemId = this.props.match.params.itemId;
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre/" + itemId + "?_embed";
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livre: res
				})
			})
	}

	render() {

		console.log(this.props);

		if (this.state.livre) {

			const item = this.state.livre;

			return (
				<div className="page-roman">
					<Helmet
						link={[
							getPageCss('chronique')
						]}
						title={item.title.rendered}
					/>
					<DesktopSkeleton item={item}/>
				</div>
			)
		}
		else {
			return null;
		}
	}
}
export default LivreRoot;