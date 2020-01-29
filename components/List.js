/* eslint-disable max-len */
import React, {useContext} from 'react';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia} from '../hooks/APIHooks';
import {List as BaseList, ListItem as BaseItem} from 'native-base';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data, loading] = getAllMedia();
  console.log('List', data, loading);
  setMedia(data);
  return (
    <FlatList
      data={media}
      keyExtractor={(item, index) => index.toString()}
      renderItem={
        ({item}) =>
        <BaseItem>
        <ListItem
          navigation={props.navigation}
          singleMedia={item} />
          </BaseItem>}
    />
  );
};
List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;
