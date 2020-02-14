import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import {View} from 'native-base';
import ImageBackground from 'react-native';

const Home = (props) => {
  // console.log('Home', props);
  const {navigation} = props;
  return (
    <List navigation={navigation}></List>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
