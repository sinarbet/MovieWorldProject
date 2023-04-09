import { combineReducers } from 'redux';
import { moviesReducer } from './reducer';

const reducers = combineReducers({
	movies: moviesReducer,
});
export default reducers;