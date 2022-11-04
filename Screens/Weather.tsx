import * as React from 'react'
import {View, Text, ActivityIndicator, StyleSheet, SafeAreaView} from 'react-native'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import Constants from 'expo-constants'
import Weathercityy from '../components/Weathercityy'



const ACESS_KEY="a6f46c58d53fd8fde7f4b5ab52c98daa"
const WeatherScreen=({capitalCity})=>{
  const [weatherData,setWeatherData]=useState(null);
  const [loaded,setLoaded]=useState(true);

  async function fetchWeatherData(capitalCity:string) {
    setLoaded(false);
    const API=`https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${ACESS_KEY}`;
    try{
      const response=await fetch(API);
      if(response.status==200) {
        const data=await response.json();
        setWeatherData(data)
      } else{
        setWeatherData(null);
      }
      setLoaded(true);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchWeatherData('Beijing');
    console.log(weatherData)
  },[])

  if(!loaded){
    return(
      <View style={styles.container}>
      <ActivityIndicator color="gray" size={36}/>
      </View>
    )
  }

  else if(weatherData===null){
    return(
      <SafeAreaView>
      <Text style={styles.primaryText}>Not Loaded</Text>
      </SafeAreaView>
    )
  }

  return(
    <View> 
    <Text style={{fontSize: 20, textAlign:'center', fontWeight:'bold', marginTop:30}}>weather details</Text>
    <View>
    <Weathercityy weatherData={weatherData} />
    </View>
    </View>
  )
}

export default WeatherScreen

const styles=StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
   primaryText:{
     margin: 20,
    fontSize: 28
  }
})