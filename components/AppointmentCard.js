import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppointmentCard = ({ appointment }) => {
  return (
    <View style={styles.entryBox}>
      <Text style={styles.entryText}>{appointment.name}</Text>
      <Text style={styles.dateText}>{appointment.date}</Text>
      <Text style={styles.timeText}>{appointment.time}</Text>
      <Text style={styles.descriptionText}>{appointment.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  entryBox: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: '5%',
    marginVertical: '3%',
    width: '90%',
    height: '22%'
  },
  entryText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left'
  },
  dateText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left'
  },
  timeText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left'
  },
  descriptionText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left'
  }
});

export default AppointmentCard;
