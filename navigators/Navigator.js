import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../views/Home';
import Profile from '../views/Profile';
import Single from '../views/Single';
import AuthLoading from '../views/AuthLoading';
import Login from '../views/Login';
import {Icon} from 'native-base';
import React from 'react';

const TabNavigator = createBottomTabNavigator(
    {
      Home,
      Profile,
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: () => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Profile') {
            iconName = 'person';
          }

          return <Icon
          name={iconName}
          size={25}
          />;
        },
      }),
    }
);

const StackNavigator = createStackNavigator(
    {
      Home: {
        screen: TabNavigator,
        navigationOptions: {
          headerMode: 'none', // this will hide the header
        },
      },
      Single: {
        screen: Single,
      },
      Logout: {
        screen: Login,
      },
    },
);

const Navigator = createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: StackNavigator,
      Auth: Login,
    },
    {
      initialRouteName: 'AuthLoading',
    },
);

export default createAppContainer(Navigator);
