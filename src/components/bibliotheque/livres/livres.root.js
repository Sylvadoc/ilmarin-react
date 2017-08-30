// Composant conteneur de la page Livre
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import DesktopSkeleton from './skeletons/livre-desktop.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../../utils/helmet';
import { REST_URL } from '../../../constants/pathname'

class LivreRoot extends Component {

	constructor() {
		super();
		this.state = {
			livre: undefined
		}
	}

	componentDidMount() {
        // data du livre X
		const itemId = this.props.match.params.itemId;
		let dataLivreURL = REST_URL + "/livre/" + itemId + "?_embed";
		fetch(dataLivreURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					livre: res
				})
			});
	}

	render() {

		if (this.state.livre) {

			const item = this.state.livre;
			const genreMain = item.genre[0];

			return (
				<div className="page-roman">
					<Helmet
						link={[
							getPageCss('chronique')
						]}
						title={item.title.rendered}
					/>
					<DesktopSkeleton item={item} genreMain={genreMain} />
				</div>
			)
		}
		else {
			return null;
		}
	}
}
export default LivreRoot;