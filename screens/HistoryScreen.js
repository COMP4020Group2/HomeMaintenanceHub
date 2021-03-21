import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import HistoryCard from '../components/HistoryCard';
import { getAllPastOrders } from '../stubs/pastorders';
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';


const HistoryScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState();
  const isFocused = useIsFocused();
  const [orders, setOrders] = useState();
  useEffect(() => {
    setOrders(getAllPastOrders());
  }, [isFocused]);

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
