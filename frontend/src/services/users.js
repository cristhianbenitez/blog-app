import axios from 'axios';
// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_BASE_URL;
const requestUrl = `${baseUrl}/api/users`;

const getAll = async () => {
  const response = await axios.get(requestUrl);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${requestUrl}/${id}`);
  return response.data;
};

const signup = (credentials) => {
  const { username, password, name } = credentials;
  return axios.post(requestUrl, { username, password, name });
};

export default { getAll, getById, signup };
