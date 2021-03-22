import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import { getAllAppointments } from '../stubs/appointments';

const appointments = getAllAppointments();

const UpcomingAppointmentsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} appointment={appointment} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  }
});

export default UpcomingAppointmentsScreen;
