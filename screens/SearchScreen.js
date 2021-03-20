import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,SearchBar } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (<View style={styles.container} >

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Carpentry</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Electrical</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Roofing</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Plumbing</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>HVAC</Text>
      </View>
    </TouchableOpacity>
</View> );
};

const styles = StyleSheet.create({
  container:{
    marginTop:"20%"
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
    textTransform: 'uppercase',
    fontSize: 20,
    textAlign:'center'
  }
});

export default SearchScreen;
