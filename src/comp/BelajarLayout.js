import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const sea_levelIcon = require('./img/sea_level.png');
const ground_levelIcon = require('./img/ground.jpg');
const humidityIcon = require('./img/humidity.png');
const pressureIcon = require('./img/pressure.png');
const sunriseIcon = require('./img/sunrise.png');
const sunsetIcon = require('./img/sunset.png');

//import Loader from './loading/Loader';

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {

  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=0499abffe2167df984d0f720f669548b&units=metric'
    );

    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}


render() {
  return (
    <View style={styles.containerMain}>
      <View style={styles.header}>
        <Text style={styles.text1}>Prakiraan Cuaca</Text>
      </View>
      <View style={styles.boxInput}>
        <Text style={styles.text1}>Masukkan Nama Kota</Text>
          <View style={styles.input}>
            <TextInput style = {styles.textInput}
              onChangeText={(city)=>this.setState({city})}
            />
          </View>
          <Button
            onPress={
              () => this.getWeather()
            }
            title="Lihat"
            color="#2E7D32"
            accessibilityLabel="Klik untuk melihat"
          />
      </View>

      <View style={styles.boxHasil}>
        <View style={styles.box3}>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={mainIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Main = {this.state.forecast.main}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={mainIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Desc = {this.state.forecast.description} {"\n"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={tempIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Temp = {this.state.forecast.temp} {"'Celcius"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={sunriseIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Sunrise = {this.state.forecast.sunrise} {"\n"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={sunsetIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Sunset = {this.state.forecast.sunset} {"\n"}
            </Text>
          </View>
        </View>

        <View style={styles.box3}>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={windIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Speed = {this.state.forecast.speed} {"\n"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={sea_levelIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Sea Level = {this.state.forecast.sea_level} {"\n"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={ground_levelIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Ground Level = {this.state.forecast.grnd_level} {"\n"}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={pressureIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Pressure = {this.state.forecast.pressure}
            </Text>
          </View>
          <View style={styles.boxHasilin}>
            <View style={styles.icon}>
              <Image source={humidityIcon} style={styles.iconin} />
            </View>
            <Text style = {styles.textHasil} >
            Humidity = {this.state.forecast.humidity} {"\n"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text1}>Rusdy ReactNative</Text>
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
containerMain: {
backgroundColor: '#FFFFFF',
flex: 1,
flexDirection: 'column',
},

header: {
backgroundColor: '#1B5E20',
flex: 0.5,
justifyContent: 'center'
},

boxInput: {
backgroundColor: '#1B5E20',
flex: 2,
marginTop : 20,
marginLeft : 10,
marginRight : 10,
},

boxInput1: {
backgroundColor: '#1B5E20',
flex: 2,
marginTop : 20,
marginLeft : 20,
marginRight : 20,
},

iconin: {
  height: 40,
  width: 40,
},

input: {
  flex: 1,
  marginLeft: 70,
  marginRight: 70,
  marginTop: 30,
  marginBottom: 50,
  backgroundColor:'#FFFFFF',
},

box3: {
backgroundColor: '#FFFFFF',
flex: 4,
flexDirection: 'column',
justifyContent: 'center',
marginTop: 5,
marginLeft: 5,
marginRight:5
},

boxHasilin: {
backgroundColor: '#8BC34A',
flex: 4,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
marginTop: 5,
marginLeft: 5,
marginRight:5,
marginBottom:5,
},

boxIcon: {
backgroundColor: '#8BC34A',
flex: 1,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
},

boxHasil: {
backgroundColor: '#FFFFFF',
flex: 4,
flexDirection: 'row',
marginTop: 5,
marginLeft: 10,
marginRight:10
},

footer: {
backgroundColor: '#1B5E20',
flex: 0.5,
alignItems : 'center',
justifyContent : 'center',
marginTop : 10,
},

icon: {
alignItems: 'center',
backgroundColor: '#40C4FF',
borderColor: '#00B0FF',
//borderRadius: 15,
borderWidth: 1,
justifyContent: 'center',
height: 120,
width: 50,
},

text: {
padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
},

text1: {
padding: 10, fontSize: 15, color: 'white', textAlign: 'center', fontWeight:'bold'
},

textInput: {
padding: 10, fontSize: 15, color: 'black', textAlign: 'center', fontWeight:'bold'
},

textHasil: {
padding: 10, fontSize: 15, color: 'white', fontWeight:'bold'
}


});
