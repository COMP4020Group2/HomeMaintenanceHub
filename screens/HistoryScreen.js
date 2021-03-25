import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HistoryCard from '../components/HistoryCard';
import { getAllPastOrders } from '../stubs/pastorders';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const HistoryScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('allTime');
  const isFocused = useIsFocused();
  const [orders, setOrders] = useState();
  useEffect(() => {
    setOrders(getAllPastOrders());
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        onChangeItem={(item) => setSelectedDate(item.value)}
        containerStyle={{ height: 40, marginHorizontal: 18 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        defaultValue={selectedDate}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        items={[
          { label: 'All Time', value: 'allTime' },
          { label: 'Past Year', value: 'pastYear', disabled: true },
          { label: 'Past 6 Months', value: 'past6Months', disabled: true },
          { label: 'Past 3 Months', value: 'past3Months', disabled: true },
          { label: 'Past Month', value: 'pastMonth', disabled: true }
        ]}
      />
      <ScrollView style={styles.historyEntries}>
        {orders?.map((history, index) => (
          <HistoryCard
            key={index}
            history={history}
            navigate={navigation.navigate}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    height: '100%'
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 18
  },
  historyEntries: {
    height: '89%'
  },
  dropMenu: {
    height: '11%',
    marginBottom: 10
  }
});

export default HistoryScreen;
