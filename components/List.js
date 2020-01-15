/* eslint-disable max-len */
import React, {useContext} from 'react';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {MediaContext} from '../contexts/MediaContext';
import {useFetch} from '../hooks/APIHooks';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data, loading] = useFetch('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json');
  console.log('List', data, loading);
  setMedia(data);
  return (
    <FlatList
      data={media}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};
List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;
