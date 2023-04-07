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
import FavoriteFilmsScreen from './src/components/FavoriteFilmsScreen';
import HomeScreen from './src/components/HomeScreen';
import MovieDetails from './src/components/MovieDetails';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="FavoriteFilmsScreen" component={FavoriteFilmsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
