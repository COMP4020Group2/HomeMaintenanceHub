import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import AppointmentCard from '../components/AppointmentCard';
import { getAllAppointments } from '../stubs/appointments';

const UpcomingAppointmentsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    setAppointments(getAllAppointments());
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      {appointments.map((appointment, index) => (
        <AppointmentCard key={index} appointment={appointment} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    backgroundColor: 'white'
  }
});

export default UpcomingAppointmentsScreen;
