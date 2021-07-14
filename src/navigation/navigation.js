import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../screens/SearchScreen/SearchScreen';
import BookDetails from '../screens/BookDetails/BookDetails';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'category'}>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={BookDetails}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
