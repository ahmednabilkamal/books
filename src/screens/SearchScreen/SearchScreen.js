import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, LogBox} from 'react-native';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

import Input from '../../components/Input';
import BookItem from '../../components/BookItem';

import Style from './Style';

const SearchScreen = props => {
  var IDs = [];
  const onClick = useNavigation();
  const [searchInput, setSearchInput] = useState('');

  const input = searchInput.split(' ');

  const getBookData = () => {
    // const result = Promise.all(
    //   IDs.map(id => {
    //     fetch(`https://openlibrary.org/isbn/${id}.json`).then(
    //       (response => response.json())
    //         .then(responseJson => {
    //           console.log(responseJson);
    //         })
    //         .catch(error => {
    //           console.log(error);
    //         })
    //         .catch(error => {
    //           console.log(error);
    //         }),
    //     );
    //   }),
    // );
    return fetch(`https://openlibrary.org/isbn/${input}.json`).then(res =>
      res.json(),
    );
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const {data, refetch, status} = useQuery(
    // ['books', searchInput],
    ['books'],
    () => getBookData(),
    {
      enabled: false,
      manual: true,
      refetchOnWindowFocus: false,
      fetchPolicy: 'no-cache',
    },
  );

  const handleClick = () => {
    IDs.push(input);

    refetch({refetchOnMount: 'always', refetchOnReconnect: 'always'});
  };

  return (
    <View style={Style.container}>
      <Input
        placeholder="Search books by ISBN 13 only!"
        value={searchInput}
        onChange={setSearchInput}
      />

      <TouchableOpacity style={Style.searchBtn} onPress={handleClick}>
        <Text style={Style.searchTxt}>Search</Text>
      </TouchableOpacity>

      {status === 'isFetching' && (
        <Text style={Style.loadingText}>Loading ...</Text>
      )}

      {status === 'error' && (
        <Text style={Style.errorText}>ISBN Not found</Text>
      )}

      {status === 'success' && (
        <BookItem
          isbn={data.isbn_13}
          title={data.title}
          publishers={data.publishers}
          onSelect={() => {
            if (data.length !== 0) {
              onClick.navigate('Details', {
                worksID: data.works[0].key,
                publisherName: data.publishers,
              });
            }
          }}
        />
      )}
    </View>
  );
};

export default SearchScreen;
