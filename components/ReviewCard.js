import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { buildStars } from '../utils/stringUtils';

const ReviewCard = ({ reviewInfo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.reviewTitle}>
        <Text style={styles.reviewName}>{reviewInfo.reviewer}</Text>
        <Text style={styles.reviewDate}>{reviewInfo.date}</Text>
      </View>
      <Text style={styles.ratingText}>{buildStars(reviewInfo.stars)}</Text>
      <Text style={styles.reviewBody}>{reviewInfo.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingLeft: 10,
    width: '90%'
  },
  reviewDate: {
    fontSize: 10,
    textAlign: 'right'
  },
  reviewName: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '70%'
  },
  reviewTitle: {
    flexDirection: 'row',
    fontSize: 12
  },
  reviewBox: {
    marginLeft: '5%',
    marginTop: '5%',
    marginRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  }
});

export default ReviewCard;
