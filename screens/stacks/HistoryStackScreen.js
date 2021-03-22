import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HistoryScreen from '../HistoryScreen';
import PastOrderDetailsScreen from '../PastOrderDetailsScreen';
import BookScreen from '../BookScreen';
import { theme } from '../../styles';

const HistoryStack = createStackNavigator();

const HistoryStackScreen = ({ navigation }) => {
  return (
    <HistoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.dark
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
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
