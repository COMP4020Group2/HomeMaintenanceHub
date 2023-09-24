import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SearchScreen from '../SearchScreen';
import SearchResultsScreen from '../SearchResultsScreen';
import ContractorProfileScreen from '../ContractorProfileScreen';
import BookScreen from '../BookScreen';
import ContractorReviewsScreen from '../ContractorReviewsScreen';
import AddReviewScreen from '../AddReviewScreen';
import { theme } from '../../styles';

const SearchStack = createStackNavigator();

const SearchStackScreen = ({ navigation }) => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.dark
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
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
      <SearchStack.Screen name="Reviews" component={ContractorReviewsScreen} />
      <SearchStack.Screen name="Add Review" component={AddReviewScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
