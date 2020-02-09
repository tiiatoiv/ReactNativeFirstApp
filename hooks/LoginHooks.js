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
  email: {
    presence: {
      message: 'you must give a valid email',
    },
    email: {
      message: 'not valid',
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
  },
  confirmPassword: {
    precense: 'cannot be blank',
    equality: {
      attribute: 'password',
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
    const checkpw = validate({password: text}, constraints);
    console.log('password validate', checkpw);
    setInputs((inputs) =>
      ({
        ...inputs,
        password: text,
      }));
  };

  const handlePasswordEquality = (text) => {
    const checkeq = validate({password: text, confirmPassword: text}, constraints);
    console.log('check equality', checkeq);
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
    handlePasswordEquality,
    inputs,
  };
};

export default useSignUpForm;
