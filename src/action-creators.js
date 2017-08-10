// Actions creators pour Redux
// ===========================

// export des constantes
// ---------------------
// afin  que le code des reducers puisse les utiliser
// et garantir la concordance avec les champs 'type' dans les objets actions

export const TOGGLE_BURGER = 'TOGGLE_BURGER';

// export des actions
// ------------------


export function toggleBurger() {
	return { type: TOGGLE_BURGER };
}