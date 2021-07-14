import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useQuery} from 'react-query';

import Style from './Style';

const BookDetails = props => {
  const {
    params: {worksID, publisherName},
  } = useRoute();

  console.log(publisherName);

  const {data, isLoading, error} = useQuery(['booksWork'], () =>
    fetch(`https://openlibrary.org${worksID}.json`).then(res => res.json()),
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={Style.container}>
      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Book Name : </Text>
        <Text style={Style.title}>{data.title}</Text>
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Publisher Name : </Text>
        <Text style={Style.title}>{publisherName}</Text>
      </View>

      <View>
        <Text style={Style.titles}>Book Description : </Text>
        <Text style={Style.title}>{data.description}</Text>
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Book Subject Places : </Text>
        <Text style={Style.title}>{data.subject_places}</Text>
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titles}>Book Last Version : </Text>
        <Text style={Style.title}>{data.latest_revision}</Text>
      </View>
    </View>
  );
};

export default BookDetails;
