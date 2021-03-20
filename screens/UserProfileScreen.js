import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Avatar, Button, FAB } from 'react-native-paper';
import userStub from '../stubs/user.js';

const UserProfileScreen = ({ navigation }) => {
  const users = userStub.getUser();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(users.name);
  const [address, setAddress] = useState(users.address);
  const [phone, setPhone] = useState(users.phone);
  const [email, setEmail] = useState(users.email);

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
        size={100}
        source={require('../images/jordan.jpg')}
        style={styles.Avatar}
      />
      <Text style={styles.Title}>Your Details</Text>
      <TextInput
        label="Name"
        value={name}
        editable={editing}
        style={styles.Textbox}
        onChangeText={(text) => setName(text)}
      />

      <Text style={styles.Title}>Your Address</Text>
      <TextInput
        label="Address"
        editable={editing}
        value={address}
        style={styles.Textbox}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style={styles.Title}>Your Contact Details</Text>
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
      <FAB
        color={'blue'}
        style={styles.fab}
        icon={editing ? 'content-save' : 'pencil'}
        onPress={editing ? update : startEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  Title: {
    fontWeight: 'bold',
    width: '90%',
    marginBottom: 5
  },
  Textbox: {
    width: '90%',
    marginBottom: 10
  },
  Avatar: {
    marginTop: 15
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default UserProfileScreen;
