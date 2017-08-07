// Racine applicative
// ==================

// Composant conteneur de toute l'application, il englobe tous les autres composants
// Il n'existe que pour déléguer à ses composants enfants
// ReactRouter => 1 route = 1 composant
// Ce composant 'app' correspond à l'IndexRoute

import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class IndexApp extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// On communique par le store, c'est pourquoi on récupère les params pour le setter dans le store
		this.props.setRouterParams(this.props.params, this.props.location.pathname + this.props.location.search);
	}

	componentWillUpdate(nextProps) {
		// On communique par le store, c'est pourquoi on récupère les params pour le setter dans le store
		this.props.setRouterParams(nextProps.params, nextProps.location.pathname + nextProps.location.search);
	}

	render() {
		// on retourne le children injecté par React router
		return this.props.children;
	}
}

export default IndexApp;
