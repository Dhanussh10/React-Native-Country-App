import * as React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'

const Weathercityy=({weatherData})=>{

 const  { weather:[{
   icon
 }], name,
        main: {temp, humidity},
        wind:{ speed },
       clouds:{all}
   } = weatherData;
   
   const kel=temp
   const far= ((kel-273.15)*9/5)+32
   const cel=(far-32)*5/9
   const im=' http://openweathermap.org/img/wn/10d@2x.png'
  const temperature:number=cel

return(
<View style={{marginLeft:40, marginTop:30}}>
<Text>Capital Name: {name}</Text>
<View style={{marginTop:33}}>
<Image style={styles.ig} source={{uri: `http://openweathermap.org/img/w/${icon}.png`}}/>
</View>
<View style={{marginTop:34}}>
<Text>Temperature: {temperature} deg</Text>
</View>
<View style={{marginTop:35}}>
<Text>Wind Speed: {speed} Kmph</Text>
</View>
<View style={{marginTop:36}}>
<Text>Precipiation: {all}%</Text>
</View>

</View>  
)

}

const styles=StyleSheet.create({
  ig:{
    width:180,
    height:200
  }
})
export default Weathercityy