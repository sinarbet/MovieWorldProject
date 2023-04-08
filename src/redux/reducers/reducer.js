import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	movies: [],
	favourite: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actionTypes.ADD_TO_FAVOURITE:
			const newMovie = [...state.favourite, action.payload];
			//window.localStorage.setItem('favourite', JSON.stringify(newMovie));
			return {
				...state,
				favourite: newMovie,
			};
		case actionTypes.REMOVE_FROM_FAVOURITE:
			const originalFav = state.favourite;
			const filtredFav = originalFav.filter((f) => f.id !== action.payload);
			return {
				...state,
				favourite: filtredFav,
			};
		default:
			return state;
	}
};