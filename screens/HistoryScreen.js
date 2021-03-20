import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import HistoryCard from '../components/HistoryCard';
import {getAllPastOrders} from '../stubs/pastorders';

const orders = getAllPastOrders();

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {orders.map((history, index) => (
        <HistoryCard key={index} history={history} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:"10%"
  }
});

export default HistoryScreen;
