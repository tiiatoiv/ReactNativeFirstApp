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
    <TouchableOpacity style={styles.row}>
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
    backgroundColor: '#333333',
    margin: 5,
    borderRadius: 0,
    borderStyle: 'solid',
    elevation: 1,
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
    padding: 20,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
    color: 'white',
    marginTop: 0,
  },
  pStyle: {
    fontSize: 12,
    color: 'grey',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItem;
