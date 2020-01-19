/* eslint-disable max-len */
import React, {useContext} from 'react';
import {
  FlatList,
  StyleSheet
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia} from '../hooks/APIHooks';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data, loading] = getAllMedia();
  console.log('List', data, loading);
  setMedia(data);
  return (
    <FlatList style={styles.container}
      data={media}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};
List.propTypes = {
  mediaArray: PropTypes.array,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    margin: 0,
  },
});

export default List;
