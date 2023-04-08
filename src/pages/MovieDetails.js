
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { addFavouriteAction } from '../redux/actions/actions';

const MovieDetails = ({ navigation, route, addFavourite }) => {
	const { favourite } = useSelector((state) => state.movies);
	const [ratings, setRatings] = useState(0);
	const posterDetail = route.params.movie.poster_path;
	const favMovie = route.params.movie;

	const onPress = () =>
	{
		Alert.alert("The movie added to favorites.");
		addFavourite(favMovie);
	}

	return (
		<View>
			<TouchableOpacity
				onPress={onPress}>
				<Image
					source={require('../images/heart.png')}
					style={{ width: 22, height: 22, marginLeft: 320, marginTop: 20 }} />
			</TouchableOpacity>
			<ScrollView>
				<View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10 }}>
					<View>
						<Image
							style={{ height: 300, width: 200, borderRadius: 10 }}
							source={{
								uri: 'https://image.tmdb.org/t/p/w500' + posterDetail,
							}}>
						</Image>
					</View>
					<View style={{ flexDirection: 'column', top: 20, marginHorizontal: 30 }}>
						<Text style={{ fontWeight: 'bold', fontSize: 22, marginVertical: 5 }}>{route.params.movie.title}</Text>
						<StarRating
							rating={(route.params.movie.vote_average / 2)}
							onChange={setRatings}
							starSize={28}
						/>
						<Text style={{ fontWeight: 'bold', fontSize: 14, marginVertical: 10 }}>Description</Text>
						<View style={{ marginBottom: 70 }}><Text>{route.params.movie.overview}</Text></View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
	  addFavourite: (movie) => dispatch(addFavouriteAction(movie)),
	};
  };
  
export default connect(null, mapDispatchToProps)(MovieDetails);