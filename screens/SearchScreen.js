import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Text>Home Maintenance Hub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SearchScreen;
