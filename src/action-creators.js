// Actions creators pour Redux
// ===========================

// export des constantes
// ---------------------
// afin  que le code des reducers puisse les utiliser
// et garantir la concordance avec les champs 'type' dans les objets actions

export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';
export const OPEN_BURGER = 'OPEN_BURGER';

// export des actions
// ------------------


export function toggleBurger() {
	return { type: TOGGLE_BURGER };
}

export function closeBurger() {
	return { type: CLOSE_BURGER };
}

export function openBurger() {
	return { type: OPEN_BURGER };
}