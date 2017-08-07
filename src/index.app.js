// Racine applicative
// ==================

// Composant conteneur de toute l'application, il englobe tous les autres composants
// Il n'existe que pour déléguer à ses composants enfants
// ReactRouter => 1 route = 1 composant
// Ce composant 'app' correspond à l'IndexRoute

import { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class IndexApp extends Component {

	render() {
		return this.props.children;
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(IndexApp);
