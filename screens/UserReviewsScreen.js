import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ReviewCard from '../components/ReviewCard';

const UserReviewsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {route.params.reviews.map((review, index) => (
          <ReviewCard
            reviewInfo={review}
            key={index}
            navigate={navigation.navigate}
          />
        ))}
      </ScrollView>
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

export default UserReviewsScreen;
