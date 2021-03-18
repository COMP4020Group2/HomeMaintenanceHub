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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResultsScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfileScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="ContractorProfile"
          component={ContractorProfileScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="Book"
          component={BookScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
        <Stack.Screen
          name="AppointmentDetails"
          component={AppointmentDetailsScreen}
          options={{ title: 'Home Maintenance Hub' }}
        />
      </Stack.Navigator>
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
