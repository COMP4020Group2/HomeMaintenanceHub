import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { commonStyles, theme } from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppointmentCard = ({ appointment }) => {
  return (
    <Card style={{ ...styles.entryBox, ...commonStyles.Card }}>
      <Card.Title
        titleStyle={styles.entryText}
        title={appointment.name}
        subtitle={appointment.description}
        subtitleStyle={styles.Text}
      ></Card.Title>
      <Card.Content style={styles.Info}>
        <MaterialCommunityIcons
          name="clock"
          color={theme.colors.dark}
          size={26}
        />
        <Text style={styles.Text}>{appointment.date}</Text>
        <MaterialCommunityIcons
          name="calendar"
          color={theme.colors.dark}
          size={26}
        />
        <Text style={styles.Text}>{appointment.time}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  entryBox: {
    marginHorizontal: '5%',
    marginVertical: '3%',
    width: '90%'
  },
  entryText: {
    color: theme.colors.dark,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left'
  },
  Text: {
    ...commonStyles.Text,
    fontSize: 16,
    textAlign: 'left'
  },
  Info: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default AppointmentCard;
