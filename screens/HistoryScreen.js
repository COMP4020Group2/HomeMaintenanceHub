import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HistoryCard from '../components/HistoryCard';
import { getAllPastOrders } from '../stubs/pastorders';
import { Picker } from '@react-native-picker/picker';

const orders = getAllPastOrders();

const HistoryScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.dropMenu}>
        <Picker
          selectedValue={selectedDate}
          onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Past Year" value="pastYear" />
          <Picker.Item label="Past 6 Months" value="past6Months" />
          <Picker.Item label="Past 3 Months" value="past3Months" />
          <Picker.Item label="Past Month" value="pastMonth" />
        </Picker>
      </View>
      <View style={styles.historyEntries}>
        {orders.map((history, index) => (
          <HistoryCard key={index} history={history} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '10%'
  },
  historyEntries: {
    height: '85%'
  },
  dropMenu: {
    height: '10%'
  }
});

export default HistoryScreen;
