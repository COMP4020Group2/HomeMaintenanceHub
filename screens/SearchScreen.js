import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (<View style={styles.Container}>
    <Button title="Carpentry" style={styles.Button}/>
    <Button title="Plumbling" style={styles.Button}/>
    <Button title="Roofing" style={styles.Button}/>
    <Button title="Electrical" style={styles.Button}/>
    <Button title="HVAC" style={styles.Button}/>
</View> );
};

const styles = StyleSheet.create({
  Container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Button:{
    width:100
  }
});

export default SearchScreen;
