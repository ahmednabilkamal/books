import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const Style = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 3,
    margin: 15,
    height: height * 0.08,
    padding: 8,
  },
  container: {
    backgroundColor: '#c5c5c5',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
  },
});

export default Style;
