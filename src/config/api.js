import axios from 'axios';

const BASE_URL = 'https://byteshare-app.herokuapp.com';

export const submitFile = async (data, config) => {
  const response = await axios.post(`${BASE_URL}/api/files`, data, config);
  return response.data;
};

export const getFile = async id => {
  const response = await axios.get(`${BASE_URL}/api/files/${id}`);
  return response.data;
};

export const downloadFile = async id => {
  const response = await axios.get(`${BASE_URL}/download/${id}`);
  return response.data;
};

export const sendMail = async data => {
  const response = await axios.post(`${BASE_URL}/send`, data);
  return response.data;
};
