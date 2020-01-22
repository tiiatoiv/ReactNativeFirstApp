import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
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
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 100,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    color: '#000',
  },
  pStyle: {
    color: '#000',
  }
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
