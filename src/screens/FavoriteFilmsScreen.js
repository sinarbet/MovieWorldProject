
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import { connect, useSelector } from 'react-redux';
import styles from './styles';
import StarRating from 'react-native-star-rating-widget';
import { addFavouriteAction, removeFavouriteAction, setFavouriteAction } from '../store/actions/actions';

const FavoriteFilmsScreen = ({ navigation, route, removeFavourite, addFavourite, setFavourite }) => {
	const { favourite } = useSelector((state) => state.movies);
	const [rating, setRating] = useState(0);
	const cancelIcon = require('../images/cancel-icon.png');

	const _onRemove = (movieId) => {
		removeFavourite(movieId);
	}

	const _onSortByCategory = () => {
		const filteredByGenre = Object.values(favourite).filter(movie => movie.genre_ids[0]);
		const sortedByCategory = filteredByGenre.sort((a, b) => {
		  if (a.genre_ids[0] < b.genre_ids[0]) return -1;
		  if (a.genre_ids[0] > b.genre_ids[0]) return 1;
		  return 0;
		});
		setFavourite(sortedByCategory);
	  };
	
	const _onSortByRating = () => {
		const sortedByRating = Object.values(favourite).sort((a, b) => b.vote_average - a.vote_average);
		setFavourite(sortedByRating);
	};

	const renderItem = ({ item }) => {
		const moviePoster = item.backdrop_path ? item.backdrop_path.toString() : '';

		return (
			<TouchableOpacity onPress={() => { navigation.navigate('MovieDetailScreen', { movie: item }) }}
				style={styles.movieDetailButton}>
				<View style={styles.rowStyle}>
					<View style={styles.movieImageView}>
						<Image
							style={styles.movieImage}
							source={{
								uri: 'https://image.tmdb.org/t/p/w500' + moviePoster,
							}}></Image></View>
					<View style={styles.columnStyle}>
						<View style={styles.rowStyle}>
							<Text style={styles.favoriteMovieNameStyle}>{item.title}</Text>
							<TouchableOpacity onPress={() => _onRemove(item.id)}>
								<Image source={cancelIcon} style={styles.cancelIconStyle}></Image>
							</TouchableOpacity>
						</View>
						<View style={styles.movieOverviewView}>
							<Text numberOfLines={4} style={styles.movieOverviewText}>{item.overview}</Text>
						</View>
						<View style={styles.starRatingView}>
							<StarRating
								rating={(item.vote_average / 2)}
								onChange={setRating}
								starSize={24}
							/>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		Object.keys(favourite).length == 0 ? (
			<View style={styles.title}>
				<View style={styles.viewTitle}>
					<Text style={styles.titleText}>Favorite Movies</Text>
				</View>
				<View style={styles.viewDescEmpty}>
					<Text style={styles.textTitleEmpty}>There are no movies in favorites yet.</Text>
					<Text style={styles.textDescEmpty}>To favorite a movie, go to my movie detail and tap the heart</Text>
				</View>
			</View>
		)
			:
			<><View style={styles.title}>
				<View style={styles.viewTitle}>
					<Text style={styles.titleText}>
						Favorite Movies</Text>
				</View>
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
						style={styles.sortRatingButton}>
						<View style={styles.imageView}>
							<Image
								source={require('../images/sort-rating-icon.png')}
								style={styles.imageContent} />
							<Text> Sort by Rating</Text></View>
					</TouchableOpacity>
				</View>
				<View style={styles.moviesFlatList}>
					<FlatList
						data={favourite}
						renderItem={renderItem}
						keyExtractor={(item, index) => index.toString()}
					/></View>
			</View></>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFavourite: (movie) => dispatch(removeFavouriteAction(movie)),
		addFavourite: (movie) => dispatch(addFavouriteAction(movie)),
		setFavourite: (movies) => dispatch(setFavouriteAction(movies))
	};
};

export default connect(null, mapDispatchToProps)(FavoriteFilmsScreen);