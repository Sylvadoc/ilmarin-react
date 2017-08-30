// Composant conteneur de la page Récompense
// =============================================

// generation de la page
import React, { Component } from 'react';
import Helmet from "react-helmet";

// les composants de la page
import AwardSkeleton from './skeletons/recompense.skeleton';

// constantes, variables, fonctions utiles à la bonne confection de la page
import { getPageCss } from '../utils/helmet';
import { REST_URL } from '../../constants/pathname'

class RecompenseRoot extends Component {

	constructor() {
		super();
		this.state = {
			award: undefined,
			allBooksByAward: []
		}
	}

	componentDidMount() {
		const itemId = this.props.match.params.itemId;
		// liste de tous les livres avec recompense X
		let allBooksByAwardURL = REST_URL + "/livre?recompense=" + itemId + "&_embed=1";
		fetch(allBooksByAwardURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					allBooksByAward: res
				})
			});
		// Définition de recompense X
		let awardURL = REST_URL + "/recompense/" + itemId;
		fetch(awardURL)
			.then(res => res.json())
			.then(res => {
				this.setState({
					award: res
				})
			});
	}

	render() {

		if (this.state.award) {

			const award = this.state.award;
			const allBooksByAward = this.state.allBooksByAward;

			return (
				<div className="page-taxonomie">
					<Helmet
						link={[
							getPageCss('chronique')
						]}
						title={"Tous les livres ayant reçu le " + award.name}
					/>
					<AwardSkeleton allBooksByAward={allBooksByAward} award={award} />
				</div>
			)
		}
		else {
			return null;
		}
	}
}

export default RecompenseRoot;