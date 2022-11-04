import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import  {useNavigation}  from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import * as React from 'react';
import {useState, useEffect} from 'react';
import Country from '../components/Country'

const HomeScreen = ({fetchCountryData}) => {
  const navigation = useNavigation();
  const [countryName, setCountryName] = useState<string>("");
 
  type countryData={
  name:{
    common:string
  };
  flags:{
    png:string
  };
  capital:string;
  population:number;
  capitalInfo:{
    latlng:[]
  }

}

 /* const renderListItems = ({item }) => {
    return (
   
      
    );
  };
*/   
 
  
  return (  
   <View>
         <View style={{marginTop:220}}>
    <TextInput style={{width:300, marginLeft: 45, marginTop: 70}}
      label="Country Name"
      mode="outlined"
      value={countryName}
      onChangeText={(text:string)=>setCountryName(text)}
    />

    
         </View>   
           <View style={{width:100, height:40, marginTop:60, marginLeft:145 }}>
        <Button title="Submit" color="#8F00FF" disabled={!countryName} onPress={()=>navigation.navigate('Country')}       
         /></View>
    </View>
      
  );
};

export default HomeScreen;