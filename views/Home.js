/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';
import {MediaProvider} from '../contexts/MediaContext';

const Home = () => {
  return (
    <View style={styles.container}>
      <List />
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
