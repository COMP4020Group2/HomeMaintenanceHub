import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextInput, Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addReview } from '../stubs/reviews.js';
import { getUser } from '../stubs/user.js';
import { commonStyles } from '../styles';

const AddReviewScreen = ({ navigation, route }) => {
  const [body, setBody] = useState('');
  const [stars, setStars] = useState(0);

  const save = () => {
    addReview(
      getUser().name,
      route.params.contractorInfo.name,
      parseInt(stars),
      body
    );

    setBody('');
    setStars(0);

    navigation.navigate('Contractor Profile', {
      ...route.params.contractorInfo
    });
  };

  return (
    <Card style={styles.Container}>
      <Card.Content>
        <View style={styles.starRow}>
          <TouchableOpacity onPress={() => {setStars("1")}}>
            <MaterialCommunityIcons name={stars >= 1 ? 'star' : 'star-outline'} size={48} color={"#2196F3"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars("2")}}>
            <MaterialCommunityIcons name={stars >= 2 ? 'star' : 'star-outline'} size={48} color={"#2196F3"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars("3")}}>
            <MaterialCommunityIcons name={stars >= 3 ? 'star' : 'star-outline'} size={48} color={"#2196F3"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars("4")}}>
            <MaterialCommunityIcons name={stars >= 4 ? 'star' : 'star-outline'} size={48} color={"#2196F3"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setStars("5")}}>
            <MaterialCommunityIcons name={stars >= 5 ? 'star' : 'star-outline'} size={48} color={"#2196F3"} />
          </TouchableOpacity>
        </View>
        
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
  starRow: {
    flexDirection: 'row',
    marginLeft: 40,
    marginBottom: 20
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
