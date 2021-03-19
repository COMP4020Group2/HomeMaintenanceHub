import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SearchStackScreen from './screens/stacks/SearchStackScreen';
import HistoryStackScreen from './screens/stacks/HistoryStackScreen';
import UserProfileStackScreen from './screens/stacks/UserProfileStackScreen';
import AppointmentsStackScreen from './screens/stacks/AppointmentsStackScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavBar.Navigator
        initialRouteName="Search"
        activeColor="#fff"
        inactiveColor="#fff"
        labeled
        barStyle={{ backgroundColor: 'blue' }}
      >
        <NavBar.Screen
          name="Search"
          component={SearchStackScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={26} />
            )
          }}
        />
        <NavBar.Screen
          name="History"
          component={HistoryStackScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clock" color={color} size={26} />
            )
          }}
        />
        <NavBar.Screen
          name="Appointments"
          component={AppointmentsStackScreen}
          options={{
            tabBarLabel: 'Appointments',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            )
          }}
        />
        <NavBar.Screen
          name="UserProfile"
          component={UserProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )
          }}
        />
      </NavBar.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
