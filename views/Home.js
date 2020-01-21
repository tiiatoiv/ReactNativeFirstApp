/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}></List>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#fff',
  },
});

export default Home;
