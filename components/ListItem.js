import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Container, Header } from 'native-base';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={
        () => {
          props.navigation.push('Single', {
            title: props.singleMedia.title,
            filename: props.singleMedia.filename,
            description: props.singleMedia.description,
          });
        }
      }
    >
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri:'http://media.mw.metropolia.fi/wbma/uploads/' + props.singleMedia.filename}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.pStyle}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 70,
    height: 40,
  },
  textbox: {
    flex: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  listTitle: {
    fontSize: 20,
    color: '#000',
  },
  pStyle: {
    color: '#000',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
