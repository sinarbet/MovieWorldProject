
import React from 'react';
//import { useSelector } from 'react-redux';
import { View, Text, Image } from 'react-native';

const MovieDetails = ({ navigation, route }) => {
	//const { favourite } = useSelector((state) => state.movies);

	return (
		<View
	  style= {{width: 250}}>
		<View style= {{flexDirection: 'row'}}>
			<View style={{ height: 143, with: 100, marginHorizontal: 20}}><Image 
			style= {{height: 143, width: 100, borderRadius: 10}}
			source={{
				uri: 'https://image.tmdb.org/t/p/w200/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
			}}></Image></View>
        <View style= {{flexDirection: 'column'}}>
			<Text style = {{fontWeight: 'bold', marginVertical: 10}}>{route.params.title}</Text>
			<View style = {{marginRight: 30}}><Text numberOfLines={4}>{route.params.overview}</Text></View>
			</View>
		</View>
      </View>
	);
};

export default MovieDetails;