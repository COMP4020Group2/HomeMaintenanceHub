import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,SearchBar } from 'react-native';
import pastOrderStub from '../stubs/pastorders.js';

const HistoryScreen = ({ navigation }) => {
  const pastOrders = pastOrderStub.getAllPastOrders();
  return (<View style={styles.container} >

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{pastOrders[0].name}</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{pastOrders[1].name}</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{pastOrders[2].name}</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{pastOrders[3].name}</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{pastOrders[4].name}</Text>
      </View>
    </TouchableOpacity>
</View> );
};

const styles = StyleSheet.create({
  container:{
    marginTop:"10%"
  },
  button:{
    borderRadius:8,
    paddingVertical:20,
    paddingHorizontal:10,
    backgroundColor:"#2196F3",
    marginHorizontal:"5%",
    marginVertical:"5%",
    width: "90%"
  },
  buttonText:{
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center'
  }
});

export default HistoryScreen;
