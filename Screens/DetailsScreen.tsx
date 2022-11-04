import { View, Text,Button, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
/*import { useRoute } from '@react-navigation/native';*/
import {useNavigation} from '@react-navigation/native'
import {useState} from 'react';
import {useEffect} from 'react';
import Constants from 'expo-constants'
import Country from '../components/Country'

const DetailScreen = () => {
 const [countryData, setCountryData]=useState(null);
  const [loaded,setLoaded]=useState<boolean>(true);


   async  function fetchCountryData(countryName:string) {
    setLoaded(false);
    const API=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    try {
      const response=await fetch(API);
      if(response.status == 200) {
        const data= await response.json();
        setCountryData(data);
      } else{
        setCountryData(null);
      }
      setLoaded(true);
    } catch(error) {
      console.log(error);
    }
 }

  useEffect(()=> {
    fetchCountryData('China');
    console.log(countryData);
  },[])
  
  if(!loaded){
    return(
    <View style={styles.container}>
    <ActivityIndicator color="gray" size={36}/>
    </View>
    )
  }

  else if(countryData === null){
    return(
    <SafeAreaView style={{marginTop: 100}}>
     <Text style={styles.primaryText}>Invalid Country! Please enter proper name</Text>
    </SafeAreaView>
    )
  }
const navigation=useNavigation();
  return (
    <View>
     <View>
    <Text  style={{fontSize: 20, textAlign:'center', fontWeight:'bold', marginTop:30}}>Country Details</Text>
    <View>
     <Country countryData={countryData} fetchCountryData={fetchCountryData} />
    </View>
    
    <View style={{ width:200, marginTop:80, marginLeft:50,}}>
    <Button title="Capital Weather" color="#8F00FF" onPress={()=> navigation.navigate('CapitalWeather')}  /></View>
    </View>
     </View>
  );
};

const styles=StyleSheet.create({
  container:{
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

export default DetailScreen;