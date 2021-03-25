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
        color={'black'}
        style={styles.fab}
        icon={editing ? 'content-save' : 'pencil'}
        onPress={editing ? update : startEditing}
      />
      <Card style={styles.infoForm}>
        <Card.Title titleStyle={styles.detailTitle} title="Your Details" />
        <Card.Content style={styles.content}>
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
    marginTop: 5,
    justifyContent: 'flex-start',
    width: '90%',
    ...commonStyles.Card,
    padding: 0,
  },
  userReviews: {
    alignItems: 'flex-start',
    marginTop: 5,
    padding: 0,
    width: '90%',
    ...commonStyles.Card
  },
  content: {
    marginTop: -10,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: -20,
    marginLeft: -15,
    padding: 0
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 5,
    padding: 0
  },
  Textbox: {
    width: '110%',
    marginBottom: 5,
    marginLeft: -15,
    height: 55,
  },
  Avatar: {
    marginTop: 5
  },
  fab: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    margin: 16,
    top: 5,
    right: 5
  }
});

export default UserProfileScreen;
