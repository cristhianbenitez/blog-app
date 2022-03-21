import axios from 'axios';
// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_BASE_URL;
const requestUrl = `${baseUrl}/api/login`;

const login = (credentials) => {
  const { username, password } = credentials;
  return axios.post(requestUrl, { username, password });
};

export default { login };
