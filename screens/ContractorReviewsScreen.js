import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ReviewCard from '../components/ReviewCard';
import { FAB } from 'react-native-paper';

const ContractorReviewsScreen = ({ navigation, route }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {route.params.reviews.map((review, index) => (
        <ReviewCard
          reviewInfo={review}
          key={index}
          navigate={navigation.navigate}
        />
      ))}
      <FAB
        style={styles.fab}
        icon={'plus'}
        onPress={() => {
          navigation.navigate('Add Review', {
            contractor: route.params.contractor
          });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '100%',
    width: '100%',
    padding: 10,
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    backgroundColor: '#2196F3',
    bottom: 20,
    right: 10
  }
});

export default ContractorReviewsScreen;
