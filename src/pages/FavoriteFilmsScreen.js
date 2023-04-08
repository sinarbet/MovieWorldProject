
import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import StarRating from 'react-native-star-rating-widget';

const FavoriteFilmsScreen = ({ navigation, route }) => {
	const { favourite } = useSelector((state) => state.movies);
	const [rating, setRating] = useState(0);

	const renderItem = ({ item }) => {
		const moviePoster = item.backdrop_path.toString();
		return (
			<TouchableOpacity onPress={() => { navigation.navigate('MovieDetails', { movie: item }) }}
				style={{ width: 250 }}>
				<View style={{ flexDirection: 'row' }}>
				<View style={{ height: 143, with: 100, marginHorizontal: 20, marginBottom: 15 }}><Image
						style={{ height: 143, width: 100, borderRadius: 10, backgroundColor: 'red' }}
						source={{
							uri: 'https://image.tmdb.org/t/p/w500' + moviePoster,
						}}></Image></View>
					<View style={{ flexDirection: 'column' }}>
						<Text style={{ fontWeight: '500', marginVertical: 10 }}>{item.title}</Text>
						<View style={{ marginRight: 30 }}><Text numberOfLines={4} style= {{fontSize:12, fontWeight: '200'}}>{item.overview}</Text></View>
						<View style={{top:20}}><StarRating
							rating={(item.vote_average / 2)}
							onChange={setRating}
							starSize={24}
						/></View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
		if (favourite) {
			return (
				<View style={styles.title}>
			<View style={styles.viewTitle}>
				<Text style={styles.titleText}>
					Favorite Movies</Text>
			</View>
			<View style={styles.sortSectionView}>
				<TouchableOpacity
					style={styles.sortCategoryButton}>
					<View style={styles.imageView}>
						<Image
							source={require('../images/heart.png')}
							style={styles.imageContent} />
						<Text> Sort by Category </Text></View>
				</TouchableOpacity>
				<TouchableOpacity
					style={ styles.sortRatingButton}>
					<View style={styles.imageView}>
						<Image
							source={require('../images/heart.png')}
							style={styles.imageContent} />
						<Text> Sort by Rating</Text></View>
				</TouchableOpacity>
			</View>
				<View style={styles.moviesFlatList}>
					<FlatList
						data={favourite}
						renderItem={renderItem}
						key={(idx) => idx.toString()}
					/></View>
			</View>
			);
		}
		else {
			return (
				<View style={{ top: 40 }}><Text style={{ fontWeight: 'bold', fontSize: 20 }}>Favorite Movies</Text>
					<View style={{ alignItems: 'center', height: 500, justifyContent: 'center' }}>
						<Text style={{ fontWeight: '500', fontSize: 14 }}>There are no movies in favorites yet.</Text>
						<Text style={{ fontWeight: '200', fontSize: 14, top: 10 }}>To favorite a movie, go to my movie detail and tap the heart</Text>
					</View>
				</View>);
		}
	};

	export default FavoriteFilmsScreen;