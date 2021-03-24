import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';
import { addReview } from '../stubs/reviews.js';
import { getUser } from '../stubs/user.js';
import { commonStyles, theme } from '../styles';

const AddReviewScreen = ({ navigation, route }) => {
  const [body, setBody] = useState('');
  const [stars, setStars] = useState('');

  const save = () => {
    addReview(
      getUser().name,
      route.params.contractorInfo.name,
      parseInt(stars),
      body
    );
    navigation.navigate('Contractor Profile', {
      ...route.params.contractorInfo
    });
  };

  return (
    <Card style={styles.Container}>
      <Card.Content>
        <TextInput
          label="Stars"
          value={stars}
          style={styles.starInput}
          onChangeText={(text) => setStars(text)}
        />
        <TextInput
          label="Review"
          multiline
          value={body}
          style={styles.reviewInput}
          onChangeText={(text) => setBody(text)}
        />
        <TouchableOpacity
          onPress={save}
          style={styles.button}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: '90%',
    marginTop: '20%',
    marginLeft: '5%',
    ...commonStyles.Card
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#2196F3',
    marginVertical: 10,
    width: '100%',
    height: 50
  },
  starInput: {
    marginBottom: 10,
    maxHeight: 200
  },
  reviewInput: {
    height: 300
  }
});

export default AddReviewScreen;
