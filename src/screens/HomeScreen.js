import React, { useState, useEffect } from "react";
import { connect, useSelector } from 'react-redux';
import { Searchbar } from 'react-native-paper';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import styles from "./styles";
import { fetchMoviesAction } from "../store/actions/actions";
import MoviesApi from '../store/services/api';

const HomeScreen = ({ navigation, fetchMovies }) => {

	const { movies } = useSelector((state) => state.movies);
	const [searchQuery, setSearchQuery] = useState('');
	const [rating, setRating] = useState(0);
	const [sortedMovies, setSortedMovies] = useState([]);

	const fetchData = async () => {
		const data = await MoviesApi.getMovies();
		fetchMovies(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setSortedMovies(movies);
	  }, [movies]);

	//const onChangeSearch = query => setSearchQuery(query);

	const _onSortByCategory = () => {
		sortMovies((a, b) => a.genre_ids[0] - b.genre_ids[0]);
	  };

	const _onSortByRating = () => {
		sortMovies((a, b) => b.vote_average - a.vote_average);
	};

	const sortMovies = (compareFn) => {
		const newSortedMovies = [...movies].sort(compareFn);
		setSortedMovies(newSortedMovies);
	};

	const renderItem = ({ item }) => {
		const moviePoster = item.backdrop_path;
		return (
			<TouchableOpacity onPress={() => { navigation.navigate('MovieDetailScreen', { movie: item }) }}
				style={{ width: 235 }}>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ height: 143, with: 100, marginHorizontal: 20, marginBottom: 15 }}><Image
						style={{ height: 143, width: 100, borderRadius: 10 }}
						source={{
							uri: 'https://image.tmdb.org/t/p/w500' + moviePoster,
						}}></Image></View>
					<View style={{ flexDirection: 'column' }}>
						<Text style={{ fontWeight: 'bold', marginVertical: 10 }}>{item.title}</Text>
						<View style={{ marginRight: 30 }}><Text numberOfLines={4}>{item.overview}</Text></View>
						<StarRating
							rating={(item.vote_average / 2)}
							onChange={setRating}
							starSize={24}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.title}>
			<View style={styles.viewTitle}>
				<Text style={styles.titleText}>
					Movie List</Text>
				<TouchableOpacity
					onPress={() => navigation.navigate('FavoriteFilmsScreen')}
					style={styles.favoriteMoviesButton}>
					<View style={styles.imageView}><Image
						source={require('../images/heart.png')}
						style={styles.imageContent} />
						<Text> Favorite Movies</Text></View>
				</TouchableOpacity></View>
			<View style={styles.sortSectionView}>
				<TouchableOpacity
					onPress={_onSortByCategory}
					style={styles.sortCategoryButton}>
					<View style={styles.imageView}>
						<Image
							source={require('../images/sort-category-icon.png')}
							style={styles.imageContent} />
						<Text> Sort by Category </Text></View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={_onSortByRating}
					style={ styles.sortRatingButton}>
					<View style={styles.imageView}>
						<Image
							source={require('../images/sort-rating-icon.png')}
							style={styles.imageContent} />
						<Text> Sort by Rating</Text></View>
				</TouchableOpacity>
			</View>
			<View style={styles.moviesFlatList}>
				<FlatList
					data={sortedMovies}
					renderItem={renderItem}
					key={(idx) => idx.toString()}
			/></View>
		</View>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
	  fetchMovies: (movies) => dispatch(fetchMoviesAction(movies)),
	};
  };
  
export default connect(null, mapDispatchToProps)(HomeScreen);