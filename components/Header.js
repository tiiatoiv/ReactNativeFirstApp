/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import imgUp from './whattt.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AN APPLICATION</Text>
      <Text style={styles.parStyle}>The Media Sharing Application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 50,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#f4f4f4',
    textAlign: 'center',
  },
  parStyle: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: 'lightgrey',
    textAlign: 'center',
  },
});

export default Header;
