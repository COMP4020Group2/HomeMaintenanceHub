import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UpcomingAppointmentsScreen from '../UpcomingAppointmentsScreen';
import AppointmentDetailsScreen from '../AppointmentDetailsScreen';

const AppointmentsStack = createStackNavigator();

const AppointmentsStackScreen = ({ navigation }) => {
  return (
    <AppointmentsStack.Navigator>
      <AppointmentsStack.Screen
        name="Appointments"
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
