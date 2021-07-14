import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Style from './Style';

const BookItem = props => {
  return (
    <TouchableOpacity style={Style.container} onPress={props.onSelect}>
      <View style={Style.titleContainer}>
        <Text style={Style.titles}>ISBN: </Text>
        <Text style={Style.title}>{props.isbn}</Text>
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Title: </Text>
        <Text style={Style.title}>{props.title}</Text>
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Publishers: </Text>
        <Text style={Style.title}>{props.publishers}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;
