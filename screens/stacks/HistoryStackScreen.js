import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HistoryScreen from '../HistoryScreen';
import PastOrderDetailsScreen from '../PastOrderDetailsScreen';
import BookScreen from '../BookScreen';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = ({ navigation }) => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={HistoryScreen} />
      <HistoryStack.Screen
        name="PastOrderDetails"
        component={PastOrderDetailsScreen}
      />
      <HistoryStack.Screen name="Book" component={BookScreen} />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackScreen;
