import { useState, useEffect } from "react";

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const getAllMedia = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUrl = async () => {
    try {
      const response = await fetch(apiUrl + 'media');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (e) {
      console.log('error', e.message);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
};

const login = async (uName, pWord) => {
  const data = {
    username: uName,
    password: pWord,
  };

  const fetchOptions = {
    method: 'POST',
    headers: {

      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(apiUrl + 'login', fetchOptions);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log('error', e.message);
  }
};

const register = async (uName, pWord, email, fName) => {
  const data = {
    username: uName,
    password: pWord,
    email: email,
    full_name: fName,
  };

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(apiUrl + 'users', fetchOptions);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log('error', e.message);
  }
};


export {getAllMedia, login, register};
