import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, AsyncStorage, Button} from 'react-native';

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
      <Text>Profile</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
      <Text>{user.full_name}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
