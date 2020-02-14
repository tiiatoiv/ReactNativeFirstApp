import React, {useContext, useEffect} from 'react';
import {Dimensions, View, Image, Button} from 'react-native';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import {MediaContext} from '../contexts/MediaContext';
import FormTextInput from '../components/FormTextInput';
import {handleUpload, useUploadForm} from '../hooks/UploadHooks';
import {useState} from 'react';
import {reset} from 'expo/build/AR';

const deviceHeight = Dimensions.get('window').height;

const Upload2 = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [image, setImage] = useState(null);
  const [send, setSend] = useState(false);

  const {
    handleTitleChange,
    handleDescriptionChange,
    inputs
  } = useUploadForm();

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  const _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      exif: true,
    });

    console.log(result);
    console.log('its uploading: ', result.uri);

    if (!result.cancelled) {
      setFile({file: result});
    }

    const handleTitle = (text) => {
      handleTitleChange(text);
    }

    const handleDescription = (text) => {
      handleDescriptionChange(text);
    }

    const upload = () => {
      handleUpload(image, props.navigation, setMedia);
      reset();
    }
};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 100, width: 100}}>
      <Button
        title="Pick an image from camera roll"
        onPress={_pickImage} />
      {file &&
        <Image source={{uri: file.uri, isStatic: true}} style={{width: 300, height: 300}} />}
      <FormTextInput
        autoCapitalize='none'
        placeholder='title'
        onChangeText={handleTitleChange}
        value={inputs.title}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='description'
        onChangeText={handleDescriptionChange}
        value={inputs.description}
      />
      <Button
        title="create post"
        onPress={handleUpload(file)} />
    </View>
  );
};
export default Upload2;
