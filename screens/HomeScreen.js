import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.Container}>
      <Button title="Carpentry" style={StyleSheet.Button} />
      <Button title="Plumbling" style={StyleSheet.Button} />
      <Button title="Roofing" style={StyleSheet.Button} />
      <Button title="Electrical" style={StyleSheet.Button} />
      <Button title="HVAC" style={StyleSheet.Button} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {},
  Button: {
    backgroundColor: '#2196F3'
  }
});

export default HomeScreen;
