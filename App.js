import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import fetchWeather from './utils/weatherApi';

const iconNames = {
  Default: 'md-time',
  Clear: 'md-sunny',
  Rain: 'md-rainy',
  Thunderstorm: 'md-thunerstorm',
  Clouds: 'md-cloudy',
  Snow: 'md-snow',
  Drizzle: 'md-umbrella'
}
const phrases = {
  Default: {
    title: `ခဏစောင့်`,
    subtitle: `အေးဆေးပေါ့... အင်တာနက်ဖွင့်ဖို့မမေ့နှင့်ဦးနော်...`,
    background: `#F26430` 
  },
  Clear: {
    title: `သာသာယာယာ`,
    subtitle: `အပြင်ထွက်လျောက်သွားလေ...`,
    background: `#0123A1`
  },
  Rain: {
    title: `မိုးရွာမယ်`,
    subtitle: `ကော်ဖီလေးသောက်ပြီး...`,
    background: `#037AFB`
  },
  Thunderstorm: {
    title: `မိုးခြိမ်းမယ်`,
    subtitle: `တစ်ယောက်ထဲဆိုကြောက်နေမယ်နော်...`,
    background: `#FA4BBB`
  },
  Clouds: {
    title: `တိမ်ထူထပ်`,
    subtitle: `ကောင်းကင်ကြီးကိုမော့ကြည့်လိုက်ဦးနော်...`,
    background: `#D3981B`
  },
  Snow: {
    title: `နှင်းကျနေတယ်`,
    subtitle: `အနွေးထည်ထူထူထဲထဲဝတ်ထားပါနော်...`,
    background: `#FAA78D`
  },
  Drizzle: {
    title: `မိုးဖွဲဖွဲလေး`,
    subtitle: `သီချင်းလေးနားထောင်ရင်... မိုးစက်လေးတွေကိုကြည့်မယ်...`,
    background: `#1CADE5`
  },
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      weather: 'Default',
    }
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      this.loadPosition();
    }
  }

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const weatherData = await this.getWeatherData(latitude, longitude);
      console.log(weatherData);
      this.setState({
        temp: Math.round(weatherData.main.temp),
        weather: weatherData.weather[0].main
      })
    } catch (error) {
      console.log(error);
    }
  };

  getWeatherData = async (latitude, longitude) => {
    try {
      return await fetchWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  render() {
    const temp = this.state.temp;
    const weather = this.state.weather;
    return (
      <View style={[styles.container, {backgroundColor: phrases[this.state.weather].background}]}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Icon name={iconNames[weather]} size={80} color={'white'} />
          <Text style={styles.temp}>{temp}° C</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{phrases[this.state.weather].title}</Text>
          <Text style={styles.subtitle}>{phrases[this.state.weather].subtitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 2.5,
    // backgroundColor: 'blue'
  },
  body: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 5,
    // backgroundColor: 'red',
    margin: 10
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 45,
    color: 'white'
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 60,
    color: 'white',
    marginBottom: 5
  },
  subtitle: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
    color: 'white'
  }
});