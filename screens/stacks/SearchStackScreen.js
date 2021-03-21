import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchScreen from '../SearchScreen';
import SearchResultsScreen from '../SearchResultsScreen';
import ContractorProfileScreen from '../ContractorProfileScreen';
import BookScreen from '../BookScreen';
import ReviewsScreen from '../ReviewsScreen';
import AddReviewScreen from '../AddReviewScreen';

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
      <SearchStack.Screen name="Book" component={BookScreen} />
      <SearchStack.Screen name="Reviews" component={ReviewsScreen} />
      <SearchStack.Screen name="Add Review" component={AddReviewScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
