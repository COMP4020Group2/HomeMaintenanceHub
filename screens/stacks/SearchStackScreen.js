import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchScreen from '../SearchScreen';
import SearchResultsScreen from '../SearchResultsScreen';
import ContractorProfileScreen from '../ContractorProfileScreen';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({ navigation }) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen
        name="Appointment Details"
        component={SearchResultsScreen}
      />
      <SearchStack.Screen
        name="Contractor Profile"
        component={ContractorProfileScreen}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
