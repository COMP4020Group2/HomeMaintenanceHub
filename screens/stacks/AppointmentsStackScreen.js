import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UpcomingAppointmentsScreen from '../UpcomingAppointmentsScreen';
import AppointmentDetailsScreen from '../AppointmentDetailsScreen';
import { theme } from '../../styles';

const AppointmentsStack = createStackNavigator();

const AppointmentsStackScreen = ({ navigation }) => {
  return (
    <AppointmentsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.dark
        },
        cardStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <AppointmentsStack.Screen
        name="Upcoming Appointments"
        component={UpcomingAppointmentsScreen}
      />
      <AppointmentsStack.Screen
        name="Appointment Details"
        component={AppointmentDetailsScreen}
      />
    </AppointmentsStack.Navigator>
  );
};

export default AppointmentsStackScreen;
