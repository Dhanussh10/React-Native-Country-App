import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, SafeAreaView ,ActivityIndicator, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import RootNavigator from './Navigation/index';
import Constants from 'expo-constants';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
 


  return (
    <>
      <RootNavigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles=StyleSheet.create({
  
})
