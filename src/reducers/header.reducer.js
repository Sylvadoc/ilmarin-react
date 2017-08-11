// Reducer dédié au header
// =================================
import { TOGGLE_BURGER, CLOSE_BURGER, OPEN_BURGER } from '../action-creators';

export default function headerReducer(state = {}, action) {
	switch (action.type) {

		case TOGGLE_BURGER:
			return { ...state, burgerIsDisplayed: !state.burgerIsDisplayed };

		case CLOSE_BURGER:
			return { ...state, burgerIsDisplayed: false };

		case OPEN_BURGER:
			return { ...state, burgerIsDisplayed: true };

		default:
			return state;
	}
}