import * as React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'



const Country=({countryData, fetchCountryData})=>{

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

const capitalCity=countryData[0].capital

return(
  <View>
  <View style={{marginLeft:40,marginTop:30}}>
   <Text> Name: {countryData[0].name.common} </Text>
   </View>
   <View style={{marginLeft:40,marginTop:33}}>
  <Image style={styles.ig} source={{uri:`${countryData[0].flags.png}`}} />
   </View>
   <View style={{marginLeft:40,marginTop:36}}>
   <Text> Capital: {countryData[0].capital}</Text>
   </View>
   <View style={{marginLeft:40,marginTop:39}}>
   <Text> Population: {countryData[0].population}</Text>
   </View>
   <View style={{marginLeft:40,marginTop:42}}>
   <Text> Latitude: {countryData[0].capitalInfo.latlng[0]} deg</Text>
   </View>
   <View style={{marginLeft:40, marginTop:45}}>
   <Text> Longitude: {countryData[0].capitalInfo.latlng[1]} deg</Text>
   </View>
  </View>
)


}

const styles=StyleSheet.create({
  ig:{
    width:250,
    height:150
  },
})


export default Country;