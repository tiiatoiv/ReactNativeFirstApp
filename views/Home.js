/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import List from '../components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../views/card42.png')} style={{width: '100%', height: '100%'}}>
        <List navigation={navigation}></List>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#000',
  },
});

export default Home;
