import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Navigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default Navigator;
