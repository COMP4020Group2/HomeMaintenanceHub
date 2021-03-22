import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Carpentry" />
      <Button title="Plumbling" />
      <Button title="Roofing" />
      <Button title="Electrical" />
      <Button title="HVAC" />
    </View>
  );
};

export default HomeScreen;
