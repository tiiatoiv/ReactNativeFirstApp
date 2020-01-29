import React from 'react';
import {StyleSheet, TextInput, Item} from 'react-native';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
  const {success, error, ...otherProps} = props;
  return (
    <TextInput
      {...otherProps}
    />
  );
};

FormTextInput.propTypes = {
  style: PropTypes.object,
};

export default FormTextInput;
