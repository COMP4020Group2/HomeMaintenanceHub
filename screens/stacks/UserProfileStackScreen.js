import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UserProfileScreen from '../UserProfileScreen';

const UserProfile = createStackNavigator();

const UserProfileStackScreen = ({ navigation }) => {
  return (
    <UserProfile.Navigator>
      <UserProfile.Screen name="User Profile" component={UserProfileScreen} />
    </UserProfile.Navigator>
  );
};

export default UserProfileStackScreen;
