import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UserProfileScreen from '../UserProfileScreen';
import UserReviewsScreen from '../UserReviewsScreen';

const UserProfile = createStackNavigator();

const UserProfileStackScreen = ({ navigation }) => {
  return (
    <UserProfile.Navigator>
      <UserProfile.Screen name="User Profile" component={UserProfileScreen} />
      <UserProfile.Screen name="User Reviews" component={UserReviewsScreen} />
    </UserProfile.Navigator>
  );
};

export default UserProfileStackScreen;
