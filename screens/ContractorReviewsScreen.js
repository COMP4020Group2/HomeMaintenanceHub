import React from 'react';
import { StyleSheet, View } from 'react-native';
import ReviewCard from '../components/ReviewCard';
import { FAB } from 'react-native-paper';

const ContractorReviewsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      {route.params.reviews.map((review, index) => (
        <ReviewCard
          reviewInfo={review}
          key={index}
          navigate={navigation.navigate}
        />
      ))}
      <FAB
        color={'blue'}
        style={styles.fab}
        icon={'plus'}
        onPress={() => {
          navigation.navigate('Add Review', {
            contractor: route.params.contractor
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    flex: 1,
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});

export default ContractorReviewsScreen;
