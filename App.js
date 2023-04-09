/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FavoriteFilmsScreen from './src/screens/FavoriteFilmsScreen';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: null }}/>
          <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
          <Stack.Screen name="FavoriteFilmsScreen" component={FavoriteFilmsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
