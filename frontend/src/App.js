import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Layout, Notification } from './components';

import ProtectedRoute from './helpers/ProtectedRoute';
import { handleLoggedUser } from './reducers/userSlice';

import { IndividualBlog, UserInformation, UsersList, Login, Blogs, SignUp } from './Views';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleLoggedUser(navigate));
  }, []);

  const isUserAuth = user.token;
  return (
    <>
      <Notification />
      <Routes>
        <Route element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route element={<ProtectedRoute user={isUserAuth} />}>
            <Route path="/" element={<Blogs />} c />
            <Route path="users" element={<UsersList />} />
            <Route path="users/:id" element={<UserInformation />} />
            <Route path="blogs/:id" element={<IndividualBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
