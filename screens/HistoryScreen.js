import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HistoryCard from '../components/HistoryCard';
import { getAllPastOrders } from '../stubs/pastorders';
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

const HistoryScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState();
  const isFocused = useIsFocused();
  const [orders, setOrders] = useState();
  useEffect(() => {
    setOrders(getAllPastOrders());
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        style={styles.dropMenu}
        selectedValue={selectedDate}
        onValueChange={(value) => setSelectedDate(value)}
        items={[
          { label: 'All', value: 'All' },
          { label: 'Past Year', value: 'pastYear' },
          { label: 'Past 6 Months', value: 'past6Months' },
          { label: 'Past 3 Months', value: 'past3Months' },
          { label: 'Past Month', value: 'pastMonth' }
        ]}
      />

      <View style={styles.historyEntries}>
        {orders?.map((history, index) => (
          <HistoryCard
            key={index}
            history={history}
            navigate={navigation.navigate}
          />
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
    height: '89%'
  },
  dropMenu: {
    height: '11%'
  }
});

export default HistoryScreen;
