import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import useSignUpForm from '../hooks/LoginHooks';
import propTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import {login, register} from '../hooks/APIHooks';

// const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm(signInAsync);

const Login = (props) => { // props is needed for navigation
  const {inputs, handleUsernameChange, handleEmailChange, handleFullnameChange, handlePasswordChange} = useSignUpForm();
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
    <View style={styles.container}>

      <View style={styles.form}>
        <Text>Login</Text>
        <View>
          <FormTextInput
            autoCapitalize='none'
            placeholder='username'
            onChangeText={handleUsernameChange}
            value={inputs.username}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='password'
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            value={inputs.password}
          />
          <Button title="Sign in!" onPress={signInAsync} />
        </View>
      </View>

      <View style={styles.form}>
        <Text>Register</Text>
        <View>
          <FormTextInput
            autoCapitalize='none'
            placeholder='username'
            onChangeText={handleUsernameChange}
            value={inputs.username}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='password'
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            value={inputs.password}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='email'
            onChangeText={handleEmailChange}
            value={inputs.email}
          />
          <FormTextInput
            autoCapitalize='none'
            placeholder='fullname'
            onChangeText={handleFullnameChange}
            value={inputs.full_name}
          />
          <Button title="Register!" onPress={registerAsync} />
        </View>
      </View>

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

// proptypes here
Login.propTypes = {
  navigation: propTypes.object,
};

export default Login;
