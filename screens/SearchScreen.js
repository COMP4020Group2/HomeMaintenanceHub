import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,SearchBar, navigation } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (<View style={styles.container} >

    <TouchableOpacity onPress={() => navigation.navigate('Search Results',{ data: "Carpentry"})}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Carpentry</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search Results',{ data: "Electrical"})}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Electrical</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search Results',{ data: "Roofing"})}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Roofing</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search Results',{ data: "Plumbing"})}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Plumbing</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Search Results',{ data: "HVAC"})}>
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
