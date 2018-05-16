import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  errorMessage: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'ZawgyiOne',
    fontSize: 13,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1.7,
  },
  weather: {
    width: '40%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomRightRadius: 500,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    // eslint-disable-next-line
    shadowOffset: {
      width: 0,
      height: 1, // Can't both be 0
    },
  },
  weatherStatus: {
    paddingLeft: '20%',
    paddingTop: '18%',
  },
  body: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 3,
    margin: 20,
  },
  location: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'ZawgyiOne',
  },
  temperature: {
    color: '#fff',
    fontSize: 48,
  },
  weatherType: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'ZawgyiOne',
    marginTop: 10,
  },
  date: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'ZawgyiOne',
  },
  footer: {
    flex: 1.3,
    margin: 20,
  },
  message: {
    color: '#fff',
    marginTop: 10,
    padding: 5,
    fontSize: 18,
    fontFamily: 'ZawgyiOne',
  },
  messageDetail: {
    color: '#fff',
    padding: 5,
    fontSize: 13,
    fontFamily: 'ZawgyiOne',
  },
});

export default Styles;
