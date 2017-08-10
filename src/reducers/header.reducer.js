// Reducer dédié au header
// =================================
import { TOGGLE_BURGER } from '../action-creators';

export default function headerReducer(state = {}, action) {
	switch (action.type) {

		case TOGGLE_BURGER:
			return { ...state, burgerIsDisplayed: !state.burgerIsDisplayed };

		default:
			return state;
	}
}