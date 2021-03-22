import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { theme } from '../styles';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        value={searchQuery}
        onChangeText={onChangeSearch}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Search Results',{data:'Carpentry'})}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Carpentry</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search Results',{data:'Electrical'})}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Electrical</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search Results',{data:'Roofing'})}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Roofing</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search Results',{data:'Plumbing'})}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Plumbing</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search Results',{data:'HVAC'})}>
        <View style={styles.button}>
          <Text style={styles.hvac, styles.buttonText}>HVAC</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    justifyContent: 'center',
  },
  searchbar: {
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: '5%'
  },
  button: {
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.secondary,
    marginHorizontal: '5%',
    marginVertical: '5%',
    width: '90%'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  hvac: {
    textTransform: 'uppercase'
  }
});

export default SearchScreen;
