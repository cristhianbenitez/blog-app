import { createSlice } from '@reduxjs/toolkit';
import { blogsService, loginService, usersService } from '../services';
import { handleNotification } from './notificationSlice';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export const handleLogin = (credentials, navigate) => async (dispatch) => {
  try {
    const user = await loginService.login(credentials);
    blogsService.setToken(user.data.token);
    dispatch(setUser(user.data));
    localStorage.setItem('loggedUser', JSON.stringify(user.data));
    navigate('/');
  } catch (error) {
    dispatch(handleNotification('Wrong Credentials', 'error'));
  }
};
export const handleSignUp = (credentials, navigate) => async (dispatch) => {
  try {
    const newUser = await usersService.signup(credentials);
    blogsService.setToken(newUser.data.token);
    dispatch(setUser(newUser.data));
    localStorage.setItem('loggedUser', JSON.stringify(newUser.data));
    navigate('/');
  } catch (error) {
    const errorMsg = error.response.data.error;
    dispatch(handleNotification(errorMsg, 'error'));
  }
};

export const handleLogOut = () => (dispatch) => {
  localStorage.removeItem('loggedUser');
  dispatch(setUser({}));
};

export const handleLoggedUser = (navigate) => (dispatch) => {
  const loggedUserJSON = localStorage.getItem('loggedUser');
  if (loggedUserJSON) {
    const loggedUser = JSON.parse(loggedUserJSON);
    dispatch(setUser(loggedUser));
    blogsService.setToken(loggedUser.token);
    navigate('/');
  }
};
export default userSlice.reducer;
