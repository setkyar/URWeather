# URWeather
[![Maintainability](https://api.codeclimate.com/v1/badges/8e974823a0da760325a9/maintainability)](https://codeclimate.com/github/setkyar/URWeather/maintainability)

In short, URWeather App is a weather App for Burmese people.

Why another weather App? Why not default weather App?

In Myanmar, most people can't read in English. Especially in villages and small town which farmer live in there.

## Installation

Fist, you need to setup React Native Environment. Read about that on [React Native Docs](https://facebook.github.io/react-native/docs/getting-started.html). 

- Clone this repo
- Create `env/keys.js` in project directory and put the following code. Replace `YourOpenWeatherAPIKey` with the one you get from https://openweathermap.org
```
const Keys = {
    OpenWeatherAppID: 'YourOpenWeatherAPIKey'
}

export default Keys;
```

- and yarn or npm install
- `react-native run-ios` or `react-native run-android`

## Features

- Splash screen
- Show weather Status in Burmese (Zawgyi)

## Todos for next release

- [ ] Fix burmese font problem
- [ ] Translate more worlds in Burmese

## Todos

- [ ] Add share button
- [ ] Add Navigation
- [ ] Add Location search screen
- [ ] New design with 24 hours weather API
