import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { commonStyles, theme } from '../styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HistoryCard = ({ history, navigate }) => {
  return (
    <Card
      style={{ ...styles.entryBox, ...commonStyles.Card }}
      onPress={() => navigate('PastOrderDetails', { ...history })}
    >
      <Card.Title titleStyle={styles.entryText} title={history.name} />
      <Card.Content style={styles.cardContent}>
        <View style={styles.info}>
          <MaterialCommunityIcons name="calendar" color={'#FFF'} size={26} />
          <Text style={styles.dateText}>{history.date}</Text>
          <Text style={styles.priceText}>{'$' + history.price}</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name={
              history.positive ? 'check-circle-outline' : 'close-circle-outline'
            }
            color={history.positive ? 'green' : 'red'}
            size={40}
          />
        </View>
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
  cardContent: {
    flexDirection: 'row'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center'
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
  priceText: {
    color: 'green',
    fontSize: 18,
    textAlign: 'left'
  }
});

export default HistoryCard;
