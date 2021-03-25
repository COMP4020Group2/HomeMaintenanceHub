import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { buildStars } from '../utils/stringUtils';
import { commonStyles, theme } from '../styles';

const ReviewCard = ({ reviewInfo }) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={reviewInfo.reviewer}
        subtitleStyle={styles.subtitle}
        titleStyle={styles.title}
      />
      <Card.Content style={styles.cardContent}>
        <View style={styles.row}>
          <Text style={styles.stars}>{buildStars(reviewInfo.stars)}</Text>
          <Text>{reviewInfo.date}</Text>
        </View>
        <Text></Text>
        <Text>{reviewInfo.body}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginBottom: 5,
    width: '100%',
    borderRadius: 5
  },
  stars: {
    color: "#2196F3"
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: -10,
    justifyContent: 'space-between'
  },
  subtitle: {
    color: 'black'
  },
  cardContent: {
    marginTop: -30
  },
  title: {
    fontSize: 16
  }
});

export default ReviewCard;
