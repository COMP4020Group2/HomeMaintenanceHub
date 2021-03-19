import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import ContractorProfileScreen from './screens/ContractorProfileScreen';
import BookScreen from './screens/BookScreen';
import AppointmentDetailsScreen from './screens/AppointmentDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const NavBar = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavBar.Navigator>
        <NavBar.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <NavBar.Screen
          name="SearchResults"
          component={SearchResultsScreen}
          options={{ title: 'Search' }}
        />
        <NavBar.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'History' }}
        />
        <NavBar.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ title: 'Profile' }}
        />
        <NavBar.Screen
          name="ContractorProfile"
          component={ContractorProfileScreen}
          options={{ title: 'Contractor' }}
        />
        <NavBar.Screen
          name="Book"
          component={BookScreen}
          options={{ title: 'Book' }}
        />
        <NavBar.Screen
          name="AppointmentDetails"
          component={AppointmentDetailsScreen}
          options={{ title: 'Appointments' }}
        />
      </NavBar.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
