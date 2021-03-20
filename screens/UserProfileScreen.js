import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Avatar, Button } from 'react-native-paper';
import userStub from '../stubs/user.js';

const UserProfileScreen = ({ navigation }) => {
  const users = userStub.getUser();
  const [name, setName] = React.useState(users.name);
  const [address, setAddress] = React.useState(users.address);
  const [phone, setPhone] = React.useState(users.phone);
  const [email, setEmail] = React.useState(users.email);
  
  return (
    <View style={styles.Container}>
      <Avatar.Image size={100} source={require('../images/jordan.jpg')} style={styles.Avatar} />
      <Text style={styles.Title}>Your Details</Text>
      <TextInput
        label="Name"
        value={name}
        style={styles.Textbox}
        onChangeText={text => setName(text)}
        />

      <Text style={styles.Title}>Your Address</Text>
      <TextInput
        label="Address"
        value={address}
        style={styles.Textbox}
        onChangeText={text => setAddress(text)}
        />
      <Text style={styles.Title}>Your Contact Details</Text>
      <TextInput
        label="Phone Number"
        value={phone}
        style={styles.Textbox}
        onChangeText={text => setPhone(text)}
        />
      <TextInput
        label="Contact"
        value={email}
        style={styles.Textbox}
        onChangeText={text => setEmail(text)}
        />
      <Button icon="content-save" mode="contained" onPress={() => {
        userStub.updateUser({
          name,
          address,
          phone,
          email
        });
      }}>Save</Button>
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
  }
});

export default UserProfileScreen;
