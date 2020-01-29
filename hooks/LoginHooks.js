import {useState} from 'react';
import validate from 'validate.js';

const constraints = {
  username: {
    presence: {
      message: 'username required',
    },
    length: {
      minimum: 3,
      message: 'Your username must containt at least 3 characters',
    },
  },
  password: {
    presence: {
      message: 'password required',
    },
    length: {
      minimum: 5,
      message: 'Your password must be at least 5 characters',
    },
    email: {

    },
  },
};

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const handleUsernameChange = (text) => {
    const check = validate({username: text}, constraints);
    console.log('validate', check);
    setInputs((inputs) =>
      ({
        ...inputs,
        username: text,
      }));
  };
  const handlePasswordChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };
  const handleEmailChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        email: text,
      }));
  };
  const handleFullnameChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        full_name: text,
      }));
  };
  return {
    handleUsernameChange,
    handleEmailChange,
    handleFullnameChange,
    handlePasswordChange,
    inputs,
  };
};

export default useSignUpForm;
