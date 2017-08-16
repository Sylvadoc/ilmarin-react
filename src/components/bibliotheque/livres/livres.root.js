// Composant conteneur de la page Livre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopSkeleton from './skeletons/livre-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../../utils/helmet';
import _replace from 'lodash/replace';

class LivreRoot extends Component {

	constructor() {
		super();
		this.state = {
			livre: []
		}
	}

	componentDidMount() {
		const itemId = _replace(this.props.match.params.itemId,':','');
		let dataURL = "http://www.elbakin.net/taniquetil/wp-json/wp/v2/livre/" + itemId;
		fetch(dataURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livre: res
				})
			})
	}

	render() {

		return (
			<div className="page-library">
				<Helmet
					link={[
						getPageCss('chronique')
					]}
					title="Le livre"
				/>
				<DesktopSkeleton item={this.state.livre} />
			</div>
		)
	}
}
export default LivreRoot;