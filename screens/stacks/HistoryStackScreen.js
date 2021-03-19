import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import HistoryScreen from '../HistoryScreen';
import PastOrderDetailsScreen from '../PastOrderDetailsScreen';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = ({ navigation }) => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
      <HistoryStack.Screen
        name="PastOrderDetails"
        component={PastOrderDetailsScreen}
      />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackScreen;
