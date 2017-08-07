// Etat central de l'application (géré par Redux)
// ==============================================
// http://redux.js.org/docs/basics/Store.html

import { createStore } from 'redux';

// reducer consolidé, qui combine tous les autres reducers
import rootReducer from './reducers/root.reducer';

// état par defaut de l'application
export const DEFAULT_STATE = {
	// etat du store
};

export default function configureStore(preloadedState, enhancer) {

	const initialState = preloadedState ? preloadedState : DEFAULT_STATE;

	// création du store, en lui passant en paramètre :
	// * le reducer consolidé (qui gère l'ensemble des changements d'état de l'application)
	// * l'état initial de l'application
	// * la pile de middlewares
	const store = createStore(rootReducer, initialState, enhancer);

	return store;
}

