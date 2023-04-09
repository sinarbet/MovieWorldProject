import axios from 'axios';
import { BASE_URL } from './constants';

function getMovies() {
	return axios.get(BASE_URL).then((response) => response.data.results);
}

export default {
	getMovies,
};