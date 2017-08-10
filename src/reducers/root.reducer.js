// Reducer combiné global
// ======================

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers individuels
import header from './header.reducer';

export default combineReducers({
	// reducer pour connecter les actions redux au reac-router
	routing: routerReducer,
	// ...basé sur les reducers individuels
	header
})