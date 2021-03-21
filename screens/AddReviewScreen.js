import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { addReview } from '../stubs/reviews.js';
import { getUser } from '../stubs/user.js';

const AddReviewScreen = ({ navigation, route }) => {
  const [body, setBody] = useState('');
  const [stars, setStars] = useState(0);

  const save = () => {
    addReview(getUser().name, route.contractor, stars, body);
    navigation.goBack();
  };

  return (
    <View style={styles.Container}>
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
      <Button onPress={save}>Save</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: '10%'
  },
  starInput: {
    width: '50%',
    marginBottom: 10,
    maxHeight: 200
  },
  reviewInput: {
    width: '90%',
    height: '50%'
  }
});

export default AddReviewScreen;
