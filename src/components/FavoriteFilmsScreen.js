
import React from 'react';
//import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';

const FavoriteFilmsScreen = ({ navigation, route }) => {
	//const { favourite } = useSelector((state) => state.movies);

	return (
		<View><Text style={{fontWeight:'bold', fontSize: 20}}>Favorite Movies</Text>
			<View style = {{alignItems: 'center', height: 500, justifyContent: 'center'}}>
				<Text style={{fontWeight:'500', fontSize: 14}}>There are no movies in favorites yet.</Text>
				<Text style={{fontWeight:'200', fontSize: 14, top: 10}}>To favorite a movie, go to my movie detail and tap the heart</Text>
			</View>
		</View>
	);
};

export default FavoriteFilmsScreen;