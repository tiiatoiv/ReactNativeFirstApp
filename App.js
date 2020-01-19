/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';
import Header from './components/Header';

const App = () => {
  return (
    <View>
      <Header />
      <MediaProvider>
        <View style={styles.container}>
          <List />
        </View>
      </MediaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});

export default App;
