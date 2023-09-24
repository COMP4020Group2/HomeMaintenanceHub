import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import { getContractors } from '../stubs/contractors';

const SearchResultsScreen = ({ navigation, route }) => {
  const contractors = getContractors(route.params.data);
  return (
    <View style={styles.container}>
      {contractors.map((contractor, index) => (
        <SearchResultCard
          contractorInfo={contractor}
          key={index}
          navigate={navigation.navigate}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%'
  }
});

export default SearchResultsScreen;
