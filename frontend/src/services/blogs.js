import axios from 'axios';
// eslint-disable-next-line no-undef
const baseUrl = process.env.REACT_APP_BASE_URL;
const requestUrl = `${baseUrl}/api/blogs`;

let token;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(requestUrl);
  return response.data;
};

const getOne = async (id) => {
  const response = await axios.get(`${requestUrl}/${id}`);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(requestUrl, newObject, config);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${requestUrl}/${id}`, newObject);
  return response.data;
};

const deleteOne = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${requestUrl}/${id}`, config);
  return response.data;
};

const addComment = async (id, comment) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(`${requestUrl}/${id}/comments`, { comment }, config);
  return response.data;
};

const blogService = { getAll, getOne, create, update, setToken, deleteOne, addComment };

export default blogService;
