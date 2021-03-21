import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchScreen from '../SearchScreen';
import SearchResultsScreen from '../SearchResultsScreen';
import ContractorProfileScreen from '../ContractorProfileScreen';
import BookScreen from '../BookScreen';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({ navigation }) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="Search Results"
        component={SearchResultsScreen}
      />
      <SearchStack.Screen
        name="Contractor Profile"
        component={ContractorProfileScreen}
      />
      <SearchStack.Screen name="Book Screen" component={BookScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
