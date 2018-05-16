import React, { Component } from 'react';
import { Text, View, StatusBar, ImageBackground, ActivityIndicator } from 'react-native';

import Rabbit from 'rabbit-node';
import moment from 'moment/min/moment-with-locales';
import SplashScreen from 'react-native-splash-screen';

import Styles from './utils/Styles';
import fetchWeather from './utils/weatherApi';
import IconList, { WeatherStatusList } from './utils/Helpers';
import LinearGradientCurve from './components/LinearGradientCurve';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        temp: 0,
        status: 'Default',
      },
      currentCity: null,
      message: null,
    };
  }

  componentDidMount() {
    // this.loadPosition();
    if ('geolocation' in navigator) {
      this.loadPosition();
    }
    SplashScreen.hide();
  }

  getCurrentPosition = options =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });

  getWeatherData = async (latitude, longitude) => {
    try {
      return await fetchWeather(latitude, longitude);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    return false;
  };

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const weatherData = await this.getWeatherData(latitude, longitude);

      this.setState({
        weather: {
          temp: Math.round(weatherData.main.temp),
          status: weatherData.weather[0].main,
        },
        currentCity: weatherData.name,
      });
    } catch (error) {
      this.setState({
        message:
          'ယခု version သည် အင်တာနက်နှင့် Location ဖွင့်မှ Weather ကြည့်လို့ရမှာဖြစ်ပါသဖြင့် Internet နှင့် Location ဖွင့်ပြီးတစ်ခါပြန် Run ပေးပါ။',
      });
    }
  };

  render() {
    const { temp, status } = this.state.weather;

    if (status === 'Default') {
      return (
        <View style={[Styles.container, Styles.horizontal, { backgroundColor: '#222' }]}>
          <StatusBar hidden />
          <ActivityIndicator size="large" color="#b53ba4" />
          <Text style={Styles.errorMessage}>
            {this.state.message ? Rabbit.uni2zg(this.state.message) : null}
          </Text>
        </View>
      );
    }

    // Need to check every weather status
    const {
      backgroundImage,
      gradientFirstColor,
      gradientSecondColor,
      weatherType,
      message,
      messageDetail,
    } = WeatherStatusList[status];

    return (
      <View style={[Styles.container, { backgroundColor: 'white' }]}>
        <StatusBar hidden />
        <ImageBackground source={backgroundImage} style={Styles.backgroundImage}>
          <View style={Styles.header}>
            <View style={Styles.weather}>
              <LinearGradientCurve
                gradientFirstColor={gradientFirstColor}
                gradientSecondColor={gradientSecondColor}
                weatherStatusStyle={1}
                height="100%"
                iconName={IconList[status]}
                shadowStyle={1}
              />
            </View>
          </View>
          <View style={Styles.body}>
            <Text style={Styles.location}>
              {this.state.currentCity ? Rabbit.uni2zg(this.state.currentCity) : ''}
            </Text>
            <Text style={Styles.temperature}>{temp}° C</Text>
            <Text style={Styles.weatherType}>{Rabbit.uni2zg(weatherType)}</Text>
            <Text style={Styles.date}>
              {Rabbit.uni2zg(moment()
                  .locale('my')
                  .format('MMM.Do.Y'))}
            </Text>
          </View>
          <View style={Styles.footer}>
            <LinearGradientCurve
              gradientFirstColor={gradientFirstColor}
              gradientSecondColor={gradientSecondColor}
              weatherStatusStyle={0}
              height={8}
              iconName="0"
              shadowStyle={0}
            />
            <Text style={Styles.message}>{Rabbit.uni2zg(message)}</Text>
            <Text style={Styles.messageDetail}>{Rabbit.uni2zg(messageDetail)}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
