import React from 'react';
import {
  ListItem as BaseListItem,
  Left,
  Body,
  Right,
  Button,
  Text,
  Thumbnail,
  H3,
} from 'native-base';
import PropTypes from 'prop-types';
import {mediaURL} from '../constants/urlConst';
import { AsyncStorage } from 'react-native';
import { fetchDELETE } from '../hooks/APIHooks';
import {Icon} from 'native-base';


const ListItem = (props) => {
  return (
    <BaseListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{uri: mediaURL + props.singleMedia.thumbnails.w160}}
        />
      </Left>
      <Body>
        <H3 numberOfLines={1}>{props.singleMedia.title}</H3>
        <Text numberOfLines={1}>{props.singleMedia.description}</Text>
      </Body>
      <Right>
        <Button onPress={
          () => {
            props.navigation.push('Single', {file: props.singleMedia});
          }
        }>
          <Text>View</Text>
        </Button>
        {props.mode === 'myfiles' &&
        <>
          <Button
            full warning
            onPress={
              () => {
                props.navigation.push('Modify', {file: props.singleMedia});
              }
            }>
            <Icon name='create' />
          </Button>
          <Button
            full danger
            onPress={ async () => {
              const token = await AsyncStorage.getItem('userToken');
              const del = await fetchDELETE('media', props.singleMedia.file_id, token);
              if (del.message) {
                props.getMedia(props.mode);
              }
            }}
          >
            <Icon name='trash' />
          </Button>
        </>
        }
      </Right>
    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
  mode: PropTypes.string,
  getMedia: PropTypes.func,
};

export default ListItem;
