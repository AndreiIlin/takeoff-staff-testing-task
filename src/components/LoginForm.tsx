import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/defaultHooks';
import { logIn } from '../slices/AuthSlice';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const [username, SetUsername] = useState('');
  const [password, SetPassword] = useState('');

  const submitHandler = () => {
    dispatch(logIn({username}))
  }
  return (
    <Box
      component="form"
      border="1px solid black"
      maxWidth="500px"
      p="30px 15px"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
      onSubmit={submitHandler}
    >
      <TextField
        id="username"
        name="username"
        label="Username"
        required
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => SetUsername(e.target.value)}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        required
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => SetPassword(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </Box>

  );
};

export default LoginForm;
