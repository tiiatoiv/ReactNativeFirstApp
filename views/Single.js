import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const imageUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {props.navigation.getParam('title', 'wtf')}</Text>

      <Image
        style={styles.image}
        source={{uri: imageUrl + props.navigation.getParam('filename', 'No image')}}
       />
      <Text style={styles.pStyle}>{props.navigation.getParam('description', 'No description')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
  },
  pStyle: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  }
});

export default Single;
