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

export default { getAll, getById };
