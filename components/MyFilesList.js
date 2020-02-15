/* eslint-disable max-len */
import React, {useContext, useEffect, useState} from 'react';
import {
  List as BaseList, Spinner, View,
} from 'native-base';
import ListItemMyFiles from './ListItem';
import {MediaContext} from '../contexts/MediaContext';
import {getAllMedia, fetchGET} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';

const MyFilesList = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);

  const getMedia = async () => {
    try {
      const userFromStorage = await AsyncStorage.getItem('user');
      console.log('user token:', userFromStorage);
      const uData = JSON.parse(userFromStorage);

      const data = await fetchGET('media/user', uData.user_id, userFromStorage);
      console.log('fetched data:', data);
      setMedia(data.reverse());
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <View>

      {loading ? (
        <Spinner/>
      ) : (
        <BaseList
          dataArray={media}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <ListItemMyFiles
            navigation={props.navigation}
            singleMedia={item}
          />}
        />
      )}
    </View>
  );
};

MyFilesList.propTypes = {
  navigation: PropTypes.object,
};

export default MyFilesList;
