import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, AsyncStorage, Button, ImageBackground} from 'react-native';

const Profile = (props) => {
  const [user, setUser] = useState({});
  const userToState = async () => {
    const userFromStorage = await AsyncStorage.getItem('user');
    setUser(JSON.parse(userFromStorage));
  };

  useEffect(() => {
    userToState();
  }, []);

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../views/card42.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.infotextMain}>{user.username}</Text>
          <Text style={styles.infotext}>{user.email}</Text>
          <Text style={styles.infotext}>{user.full_name}</Text>
          <Button color='lightgrey' title="Logout" onPress={signOutAsync} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  infoBox: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infotextMain: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infotext: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#fff',
    color: '#000',
  },
});

export default Profile;
