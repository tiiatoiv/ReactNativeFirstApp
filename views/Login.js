import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import useSignUpForm from '../hooks/LoginHooks';
import propTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import {login, register} from '../hooks/APIHooks';
import {useState} from 'react';

// const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm(signInAsync);

const Login = (props) => { // props is needed for navigation
  const url = 'http://media.mw.metropolia.fi/wbma/';
  const [toggleForm, setToggleForm] = useState(true);
  const [error, setError] = useState(error);
  const {
    inputs,
    handleUsernameChange,
    handleEmailChange,
    handleFullnameChange,
    handlePasswordChange,
    handlePasswordEquality,
  } = useSignUpForm();

  const signInAsync = async () => {
    try {
      const user = await login(inputs.username, inputs.password);
      console.log('Login', user);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      props.navigation.navigate('App');
    } catch (e) {
      console.log(e.message);
    }
  };

  const registerAsync = async () => {
    try {
      const result = await register(inputs.username, inputs.password, inputs.email, inputs.full_name);
      console.log('Registered user:', result);
      await signInAsync();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View>
      <ImageBackground source={require('../views/card42.png')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {toggleForm &&
          <View style={styles.form}>
            <Text style={styles.title}>Login</Text>
            <View>
              <FormTextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                placeholder='username'
                onChangeText={handleUsernameChange}
                value={inputs.username}
              />
              <FormTextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                placeholder='password'
                onChangeText={handlePasswordChange}
                secureTextEntry={true}
                value={inputs.password}
              />
              <Button title="Sign in!" color='#000' onPress={signInAsync} />
              <Button title="No account yet?" color='#333' onPress={() => {
                setToggleForm(false);
              }
              } />
            </View>
          </View>}
          {!toggleForm &&
            <View style={styles.formReg}>
              <Text style={styles.title}>Register</Text>
              <View>
                <FormTextInput
                  style={styles.inputStyle}
                  autoCapitalize='none'
                  placeholder='username'
                  onChangeText={handleUsernameChange}
                  onEndEditing={async (evt) => {
                    const text = evt.nativeEvent.text;
                    const result = await fetch(url + 'users/username/' + text);
                    const json = await result.json();
                    console.log(json);
                    if (!result.available) {
                      setError('Username not available');
                    } else {
                      setError('');
                    }
                  }}
                  value={inputs.username}
                />
                <FormTextInput
                  style={styles.inputStyle}
                  autoCapitalize='none'
                  placeholder='password'
                  onChangeText={handlePasswordChange}
                  secureTextEntry={true}
                  value={inputs.password}
                />
                <FormTextInput
                  style={styles.inputStyle}
                  autoCapitalize='none'
                  placeholder='password again'
                  onChangeText={handlePasswordEquality}
                  secureTextEntry={true}
                  value={inputs.confirmPassword}
                />
                <FormTextInput
                  style={styles.inputStyle}
                  autoCapitalize='none'
                  placeholder='email'
                  onChangeText={handleEmailChange}
                  value={inputs.email}
                />
                <FormTextInput
                  style={styles.inputStyle}
                  autoCapitalize='none'
                  placeholder='fullname'
                  onChangeText={handleFullnameChange}
                  value={inputs.full_name}
                />
                <Button color='grey' title="Register!" onPress={registerAsync} />
                <Button title="Or Login" color='#333' onPress={() => {
                  setToggleForm(true);
                }
                } />
              </View>
            </View>
          }
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  form: {
    width: 250,
    paddingBottom: 60,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  formReg: {
    width: 250,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputStyle: {
    padding: 10,
    margin: 6,
  },
});

// proptypes here
Login.propTypes = {
  navigation: propTypes.object,
};

export default Login;
