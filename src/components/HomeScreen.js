import React, { useState, useEffect } from "react";
import { Searchbar } from 'react-native-paper';

import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async (url) => {
    const resp = await fetch(url, {
		headers: { Authentication: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjEwYWFmNjc4YjgwM2ZlYzgzMjNjMWNlZmZkOTNmOSIsInN1YiI6IjY0MmVkYzExMmRjNDRlMDEyNzEyMTZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4nDVH7cpIAOP_p6rfDA52EAJ1cbIIVWxK7sVpHrAuRs'}
	  })

    const data = await resp.json();
	console.log("MOVİE NAME",data.results);
	console.log("MOVİE CATEGORY",data.results[0].overview);
    setData(data.results);
    setLoading(false);
  };
  
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=f210aaf678b803fec8323c1ceffd93f9"
    fetchData(url);
  }, []);

  const onChangeSearch = query => setSearchQuery(query);

  const renderItem = ({ item }) => {
	console.log("İTEMM",item.backdrop_path);
	const a = item.backdrop_path;
    return (
      <TouchableOpacity onPress = {() =>{navigation.navigate('MovieDetails',{movie:item})}}
	  style= {{width: 250}}>
		<View style= {{flexDirection: 'row'}}>
			<View style={{ height: 143, with: 100, marginHorizontal: 20}}><Image 
			style= {{height: 143, width: 100, borderRadius: 10}}
			source={{
				uri: 'https://image.tmdb.org/t/p/w200/ovM06PdF3M8wvKb06i4sjW3xoww.jpg',
			}}></Image></View>
        <View style= {{flexDirection: 'column'}}>
			<Text style = {{fontWeight: 'bold', marginVertical: 10}}>{item.title}</Text>
			<View style = {{marginRight: 30}}><Text numberOfLines={4}>{item.overview}</Text></View>
			</View>
		</View>
      </TouchableOpacity>
    );
  };

	return (
		<View style= {{backgroundColor:'white', height: 600}}>
			<View style={{ flexDirection: 'row', top: 30 }}>
				<Text style={{fontWeight: 'bold', left: 20, fontSize: 22}}>
					Movie List</Text>
			<TouchableOpacity 
					onPress = {() => navigation.navigate('FavoriteFilmsScreen')}
					style={{height: 30, left: 95, backgroundColor:'#EFEFF0', width: 150, borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}>
					<Text> Favorite Movies</Text>
				</TouchableOpacity></View>
			<View style={{top: 40}}>
			{/*<Searchbar
				placeholder="Search"
				onChangeText={onChangeSearch}
				value={searchQuery}
				backgroundColor= '#EFEFF0'
	/>*/}</View>
			<View style={{ flexDirection: 'row', top: 40}}>
				<TouchableOpacity 
					style={{height: 30, left: 10, top: 10, backgroundColor:'#EFEFF0', width: 150, borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}>
						<Text> Sort By Category</Text>
					</TouchableOpacity>
				<TouchableOpacity 
					style={{height: 30, left: 50,top: 10, backgroundColor:'#EFEFF0', width: 150, borderRadius: 6, justifyContent: 'center', alignItems: 'center'}}>
					<Text> Sort by Rating</Text>
				</TouchableOpacity>
			</View>
          	<View style={{top: 60}}><FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.toString()}
			/></View>
		</View>
	);
};

export default HomeScreen;