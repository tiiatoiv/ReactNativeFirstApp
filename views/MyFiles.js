import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import MyFilesList from '../components/MyFilesList';

const MyFiles = (props) => {
  // console.log('Home', props);
  const {navigation} = props;
  return (
    <List navigation={navigation} mode={'myfiles'}></List>
  );
};

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
