# URWeather
[![Maintainability](https://api.codeclimate.com/v1/badges/8e974823a0da760325a9/maintainability)](https://codeclimate.com/github/setkyar/URWeather/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8e974823a0da760325a9/test_coverage)](https://codeclimate.com/github/setkyar/URWeather/test_coverage)

## Installation

Fist, you need to setup React Native Environment. Read about that on [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html). 

- clone this repo
- create `env/keys.js` in project directory and put the following code. Replace `YourOpenWeatherAPIKey` with the one you get from https://openweathermap.org
```
const Keys = {
    OpenWeatherAppID: 'YourOpenWeatherAPIKey'
}

export default Keys;
```

- and yarn or npm install
- `react-native run-ios` or `react-native run-android`

## Todos

- Separate code from `index.js` by creating independent react components 
- Write Tests
