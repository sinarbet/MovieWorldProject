import axios from 'axios';
import { BASE_URL } from './constants';

async function getMovies() {
	return axios.get(BASE_URL).then((response) => response.data.results);
}
async function getGenres() {
	try {
	  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=f210aaf678b803fec8323c1ceffd93f9`;
	  const response = await fetch(url);
	  const data = await response.json();

	  return data;
	} catch (error) {
	  	console.error(error);
	}
}


export default {
	getMovies,
	getGenres
};