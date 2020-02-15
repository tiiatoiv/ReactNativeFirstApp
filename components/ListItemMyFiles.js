import React from 'react';
import {
  ListItem as BaseListItem,
  Left,
  Body,
  Right,
  Button,
  Text,
  Thumbnail,
  Image,
  H3,
} from 'native-base';
import PropTypes from 'prop-types';
import {mediaURL} from '../constants/urlConst';


const ListItemMyFiles = (props) => {
  return (
    <BaseListItem thumbnail>
      <Left>
        <Image
          square
          source={{uri: mediaURL + props.singleMedia.filename}}
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
      </Right>
    </BaseListItem>
  );
};

ListItemMyFiles.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
};

export default ListItemMyFiles;
