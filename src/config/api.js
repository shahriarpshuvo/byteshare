import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const submitFile = async (data, config) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/files`, data, config);
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    else return error.response;
  }
};

export const getFile = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/api/files/${id}`);
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    return error;
  }
};

export const downloadFile = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/download/${id}`);
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    else return error.response;
  }
};

export const sendMail = async data => {
  try {
    const response = await axios.post(`${BASE_URL}/send`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
  }
};
