import * as actionTypes from '../actions/actionsTypes';

export const fetchMoviesAction = (movies) => {
	return {
		type: actionTypes.FETCH_MOVIES,
		payload: movies,
	};
};

export const addFavouriteAction = (movie) => {
	return {
		type: actionTypes.ADD_TO_FAVOURITE,
		payload: movie,
	};
};

export const removeFavouriteAction = (id) => {
	return {
		type: actionTypes.REMOVE_FROM_FAVOURITE,
		payload: id,
	};
};