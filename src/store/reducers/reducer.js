import * as actionTypes from '../actions/actionsTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
	movies: [],
	favourite: [],
	genres: []
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actionTypes.FETCH_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case actionTypes.SET_FAVOURITE:
			return {
				...state,
				favourite: action.payload,
			};
		case actionTypes.ADD_TO_FAVOURITE:
			const newMovie = [...state.favourite, action.payload];
			//AsyncStorage.setItem('favourite', JSON.stringify(newMovie));
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