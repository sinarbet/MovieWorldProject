
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { addFavouriteAction, removeFavouriteAction } from '../store/actions/actions';
import styles from './styles';

const MovieDetailScreen = ({ navigation, route, addFavourite, removeFavourite }) => {
	const { favourite } = useSelector((state) => state.movies);
	const [ratings, setRatings] = useState(0);
	const posterDetail = route.params.movie.poster_path;
	const favMovie = route.params.movie;
	const [isFavMov, setIsFavMov] = useState(favourite.find((m) => m.id == favMovie.id) ? true : false);
	const addIcon = require('../images/red-heart.png');
	const removeIcon = require('../images/heart.png');

	const onPress = () => {
		if (favourite.find((m) => m.id == favMovie.id)) {
			removeFavourite(favMovie.id);
			//Alert.alert('The movie removed from favorites.');
		}
		else {
			addFavourite(favMovie);
			//Alert.alert('The movie added to favorites.');
		}
	}

	useEffect(() => {
		setIsFavMov(favourite.find((m) => m.id == favMovie.id) ? true : false);
	}, [favourite]);

	return (
		<View>
			<TouchableOpacity
				onPress={onPress}>
				<Image
					source={isFavMov ? addIcon : removeIcon}
					style={styles.movieDetailFavIcon} />
			</TouchableOpacity>
			<ScrollView>
				<View style={styles.movieDetailView}>
					<View>
						<Image
							style={styles.movieDetailPoster}
							source={{
								uri: 'https://image.tmdb.org/t/p/w500' + posterDetail,
							}}>
						</Image>
					</View>
					<View style={styles.movieDetailInfoView}>
						<Text style={styles.movieDetailTitle}>{route.params.movie.title}</Text>
						<StarRating
							rating={(route.params.movie.vote_average / 2)}
							onChange={setRatings}
							starSize={28}
						/>
						<Text style={styles.movieDetailDescTitle}>Description</Text>
						<View style={styles.movieDetailOverview}><Text>{route.params.movie.overview}</Text></View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addFavourite: (movie) => dispatch(addFavouriteAction(movie)),
		removeFavourite: (movie) => dispatch(removeFavouriteAction(movie))
	};
};

export default connect(null, mapDispatchToProps)(MovieDetailScreen);