import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import Rabbit from 'rabbit-node';
import moment from "moment/min/moment-with-locales";
import SplashScreen from 'react-native-splash-screen';

import fetchWeather from "./utils/weatherApi";
import IconList, { WeatherStatusList } from "./utils/Helpers";
import LinearGradientCurve from "./components/LinearGradientCurve";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      weather: "Default",
      currentCity: null,
      message: null
    };
  }

  componentDidMount() {
    // this.loadPosition();
    if ("geolocation" in navigator) {
      this.loadPosition();
    }
    SplashScreen.hide();
  }
  
  getCurrentPosition = (options) => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });

  getWeatherData = async (latitude, longitude) => {
    try {
      return await fetchWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  }

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      console.log(position);
      const { latitude, longitude } = position.coords;
      const weatherData = await this.getWeatherData(latitude, longitude);

      this.setState({
        temp: Math.round(weatherData.main.temp),
        weather: weatherData.weather[0].main,
        currentCity: weatherData.name
      });
    } catch (error) {
      console.log(error);
      this.setState({
        message: 'ယခု version သည် အင်တာနက်နှင့် Location ဖွင့်မှ Weather ကြည့်လို့ရမှာဖြစ်ပါသဖြင့် Internet နှင့် Location ဖွင့်ပြီးတစ်ခါပြန် Run ပေးပါ။',
      });
      console.log(error);
    }
  };

  render() {
    const temp = this.state.temp;
    const weather = this.state.weather;

    if(weather === 'Default') {
      return(
        <View style={[styles.container, styles.horizontal, { backgroundColor: "#222" }]}>
          <StatusBar hidden />
          <ActivityIndicator size="large" color="#b53ba4" />
          <Text style={styles.errorMessage}>{this.state.message ? Rabbit.uni2zg(this.state.message) : null}</Text>
        </View>
      )
    }

    //Need to check every weather status
    const {
      backgroundImage, gradientFirstColor, gradientSecondColor, weatherType, message, messageDetail
    } = WeatherStatusList[weather];

    return (
      <View style={[styles.container, { backgroundColor: "white" }]}>
        <StatusBar hidden />
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.header}>
            <View style={styles.weather}>
              <LinearGradientCurve
                gradientFirstColor={gradientFirstColor}
                gradientSecondColor={gradientSecondColor}
                weatherStatusStyle={styles.weatherStatus}
                height="100%"
                iconName={IconList[weather]}
                shadowStyle={styles.shadow}
              />
            </View>
          </View>
          <View style={styles.body}>
            <Text style={styles.location}>
            {this.state.currentCity ? Rabbit.uni2zg(this.state.currentCity) : ''}
            </Text>
            <Text style={styles.temperature}>{temp}° C</Text>
            <Text style={styles.weatherType}>{Rabbit.uni2zg(weatherType)}</Text>
            <Text style={styles.date}>
              {Rabbit.uni2zg(moment().locale("my").format("MMM.Do.Y"))}
            </Text>
          </View>
          <View style={styles.footer}>
            <LinearGradientCurve
              gradientFirstColor={gradientFirstColor}
              gradientSecondColor={gradientSecondColor}
              weatherStatusStyle={false}
              height={8}
              iconName={false}
              shadowStyle={false}
            />
            <Text style={styles.message}>{Rabbit.uni2zg(message)}</Text>
            <Text style={styles.messageDetail}>{Rabbit.uni2zg(messageDetail)}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  horizontal: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20
  },
  errorMessage: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'ZawgyiOne',
    fontSize: 13
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1.7
  },
  weather: {
    width: "40%",
    height: "100%",
    backgroundColor: "white",
    borderBottomRightRadius: 500,
    overflow: "hidden"
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOffset: {
      width: 0,
      height: 1 // Can't both be 0
    }
  },
  weatherStatus: {
    paddingLeft: "20%",
    paddingTop: "18%"
  },
  body: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 3,
    margin: 20
  },
  location: {
    color: "#fff",
    fontSize: 13,
    fontFamily: 'ZawgyiOne'
  },
  temperature: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "bold"
  },
  weatherType: {
    color: "#fff",
    fontSize: 18,
    fontFamily: 'ZawgyiOne',
    fontWeight: "bold",
    marginTop: 10
  },
  date: {
    color: "#fff",
    fontSize: 13,
    fontFamily: 'ZawgyiOne'
  },
  footer: {
    flex: 1.3,
    margin: 20
  },
  message: {
    color: "#fff",
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'ZawgyiOne'
  },
  messageDetail: {
    color: "#fff",
    padding: 5,
    fontSize: 13,
    fontFamily: 'ZawgyiOne'
  }
});
