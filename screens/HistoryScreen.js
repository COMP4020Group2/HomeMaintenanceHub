import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,SearchBar } from 'react-native';
import pastOrderStub from '../stubs/pastorders.js';

const HistoryScreen = ({ navigation }) => {
  const pastOrders = pastOrderStub.getAllPastOrders();
  return (<View style={styles.container} >

    <View style = {styles.entryBox}>
      <Text style = {styles.entryText}>{pastOrders[0].name}</Text>
      <Text style = {styles.dateText}>{pastOrders[0].date}</Text>
      <Text style = {styles.priceText}>{"$"+pastOrders[0].price}</Text>
    </View>

    <View style = {styles.entryBox}>
      <Text style = {styles.entryText}>{pastOrders[1].name}</Text>
      <Text style = {styles.dateText}>{pastOrders[1].date}</Text>
      <Text style = {styles.priceText}>{"$"+pastOrders[1].price}</Text>
    </View>

    <View style = {styles.entryBox}>
      <Text style = {styles.entryText}>{pastOrders[2].name}</Text>
      <Text style = {styles.dateText}>{pastOrders[2].date}</Text>
      <Text style = {styles.priceText}>{"$"+pastOrders[2].price}</Text>
    </View>

    <View style = {styles.entryBox}>
      <Text style = {styles.entryText}>{pastOrders[3].name}</Text>
      <Text style = {styles.dateText}>{pastOrders[3].date}</Text>
      <Text style = {styles.priceText}>{"$"+pastOrders[3].price}</Text>
    </View>

    <View style = {styles.entryBox}>
      <Text style = {styles.entryText}>{pastOrders[4].name}</Text>
      <Text style = {styles.dateText}>{pastOrders[4].date}</Text>
      <Text style = {styles.priceText}>{"$"+pastOrders[4].price}</Text>
    </View>
</View> );
};

const styles = StyleSheet.create({
  container:{
    marginTop:"10%"
  },
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

export default HistoryScreen;
