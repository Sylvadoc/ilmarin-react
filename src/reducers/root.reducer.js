// Reducer combiné global
// ======================

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// reducer consolidé...
const rootReducer = combineReducers({
	// reducer pour connecter les actions redux au reac-router
	routing: routerReducer,
	// ...basé sur les reducers individuels
	// aucun pour le moment
});

export default rootReducer;