import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ReviewCard from '../components/ReviewCard';

const UserReviewsScreen = ({ navigation, route }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {route.params.reviews.map((review, index) => (
        <ReviewCard
          reviewInfo={review}
          key={index}
          navigate={navigation.navigate}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '3%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '100%'
  }
});

export default UserReviewsScreen;
