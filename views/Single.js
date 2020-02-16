import React, {useEffect, useState} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  H3,
  Icon,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';
import AsyncImage from '../components/AsyncImage';
import { Video } from 'expo-av';
import {Dimensions} from 'react-native';
import {mediaURL} from '../constants/urlConst';
import { getUser, getLikes } from '../hooks/APIHooks';

const deviceHeight = Dimensions.get('window').height;


const Single = (props) => {
  const {navigation} = props;
  const [owner, setOwner] = useState({});
  const [likes, setLikes] = useState({});
  const file = navigation.state.params.file;

  const getOwner = async () => {
    const owner = await getUser(file.user_id);
    setOwner(owner);
  };

  const getPostLikes = async () => {
    let likes = [];
    likes = await getLikes(file.file_id);
    console.log('called like for file:', file.file_id);
    setLikes(likes);
    console.log('Likes:', likes);
  };

  useEffect(() => {
    getOwner();
    getPostLikes();
  }, []);

  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            {file.media_type === 'image' ?
            (<AsyncImage
              style={{
                width: '100%',
                height: deviceHeight / 2,
              }}
              spinnerColor='#777'
              source={{uri: mediaURL + file.filename}}
            />)
          :
            (<Video
              source={{uri: mediaURL + file.filename}}
              rate={1.0}
              volumn={1.0}
              isMuted={false}
              resizeMode='contain'
              shouldPlay
              isLooping
              useNativeControls
              style={{width:'100%', height: deviceHeight/2}}
            />)
            }
          </CardItem>
          <CardItem>
            <Left>
              <Icon name='image'/>
              <Body>
                <H3>{file.title}</H3>
                <Text>{file.description}</Text>
                <Text>By {owner.username}</Text>
                <Text>{} Likes</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
