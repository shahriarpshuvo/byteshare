import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const testApi = async () => {
  const response = await axios.get(`${BASE_URL}/test`);
  return response.data.message;
};
