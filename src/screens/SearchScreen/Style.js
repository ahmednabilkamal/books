import {StyleSheet, Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBtn: {
    backgroundColor: 'blue',
    margin: 15,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
  },
  searchTxt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginStart: 15,
  },
  loadingText: {
    color: 'green',
    fontSize: 16,
    marginStart: 15,
  },
});

export default Style;
