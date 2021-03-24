import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Avatar, FAB, Card } from 'react-native-paper';
import { getUserReviews } from '../stubs/reviews.js';
import userStub from '../stubs/user.js';
import ReviewCard from '../components/ReviewCard';
import { commonStyles, theme } from '../styles';

const UserProfileScreen = ({ navigation }) => {
  const user = userStub.getUser();
  const reviews = getUserReviews(user.name);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);

  const update = () => {
    userStub.updateUser({
      name,
      address,
      phone,
      email
    });
    setEditing(false);
  };

  const startEditing = () => {
    setEditing(true);
  };

  return (
    <View style={styles.Container}>
      <Avatar.Image
        size={90}
        source={require('../images/jordan.jpg')}
        style={styles.Avatar}
      />
      <FAB
        color={'blue'}
        style={styles.fab}
        icon={editing ? 'content-save' : 'pencil'}
        onPress={editing ? update : startEditing}
      />
      <Card style={styles.infoForm}>
        <Card.Title titleStyle={styles.Title} title="Your Details" />
        <Card.Content>
          <TextInput
            label="Name"
            value={name}
            editable={editing}
            style={styles.Textbox}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            label="Address"
            editable={editing}
            value={address}
            style={styles.Textbox}
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            label="Phone Number"
            editable={editing}
            value={phone}
            style={styles.Textbox}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Contact"
            editable={editing}
            value={email}
            style={styles.Textbox}
            onChangeText={(text) => setEmail(text)}
          />
        </Card.Content>
      </Card>
      <TouchableOpacity
        style={styles.userReviews}
        onPress={() =>
          navigation.navigate('User Reviews', {
            reviews: reviews
          })
        }
      >
        <Text style={styles.Title}>Your Top 2 Reviews</Text>
        {reviews.slice(0, 2).map((review, index) => (
          <ReviewCard key={index} reviewInfo={review} />
        ))}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 3,
    alignItems: 'center'
  },
  infoForm: {
    flex: 2,
    justifyContent: 'flex-start',
    width: '90%',
    ...commonStyles.Card,
    paddingBottom: 0
  },
  userReviews: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 5,
    padding: 0,
    width: '90%',
    ...commonStyles.Card
  },
  Title: {
    fontSize: 16,
    margin: 0,
    padding: 0
  },
  Textbox: {
    width: '100%',
    marginBottom: 5,
    marginHorizontal: 0
  },
  Avatar: {
    marginTop: 5
  },
  fab: {
    position: 'absolute',
    margin: 16,
    top: 0,
    right: 0
  }
});

export default UserProfileScreen;
