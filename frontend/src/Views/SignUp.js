import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { handleSignUp } from '../reducers/userSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useField } from '../hooks/useField';

export const SignUp = () => {
  const { reset: resetUsername, ...userName } = useField('signup-username');
  const { reset: resetName, ...name } = useField('signup-name');
  const { reset: resetPassword, ...password } = useField('password');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSignUp({ username: userName.value, password: password.value, name: name.value }, navigate));
    resetUsername();
    resetPassword();
    resetName();
  };

  return (
    <Form onSubmit={handleSubmit} className="w-25 mx-auto m-5 d-flex flex-column align-items-start">
      <h2 className="mb-4">Sign Up</h2>
      <Form.Label htmlFor="signup-username">Username</Form.Label>
      <Form.Control
        {...userName}
        id="signup-username"
        aria-describedby="usernameHelpBlog"
        autoComplete="new-username"
      />
      <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control {...name} id="name" aria-describedby="nameHelpBlog" />
      <Form.Label htmlFor="signup-inputPassword">Password</Form.Label>
      <Form.Control
        {...password}
        id="signup-inputPassword"
        autoComplete="new-password"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted className="mb-3">
        Your password must be whatever you want
      </Form.Text>
      <Button type="submit" className="d-block" variant="outline-primary">
        Submit
      </Button>
    </Form>
  );
};
