import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import WeatherScreen from '../Screens/Weather'


const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}  />
      <HomeStack.Screen name="Country" component={DetailsScreen}  />
      <HomeStack.Screen name="CapitalWeather" component={WeatherScreen}/>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;