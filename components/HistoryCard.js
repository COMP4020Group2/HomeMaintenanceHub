import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HistoryCard = ({ history }) => {
    return (
      <View style={styles.entryBox}>
        <Text style={styles.entryText}>{history.name}</Text>
        <Text style={styles.dateText}>{history.date}</Text>
        <Text style={styles.priceText}>{"$"+history.price}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
entryBox:{
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:"#FFFFFF",
    marginHorizontal:"5%",
    marginVertical:"3%",
    width: "90%",
    height: "16%"
  },
  entryText:{
    color: "black",
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'left'
  },
  dateText:{
    color: "black",
    fontSize: 16,
    textAlign:'left'
  },
  priceText:{
    color: "green",
    fontSize: 18,
    textAlign:'left'
  }
});

export default HistoryCard;