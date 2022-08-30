import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/defaultHooks';
import { logIn } from '../slices/AuthSlice';
import { routes } from '../utils/routes';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [authError, setAuthError] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(routes.loginData(), values);
        dispatch(logIn(response.data));
        navigate('/');
      } catch (err: any) {
        if (err.isAxiosError && err.response.status === 401) {
          setAuthError(true);
          return;
        }
        throw new Error(err);
      }
    },
  });

  return (
    <Box
      component="form"
      border="1px solid black"
      maxWidth="500px"
      p="30px 15px"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
      onSubmit={formik.handleSubmit}
      mx={'auto'}
    >
      <TextField
        id="username"
        name="username"
        label="Username"
        required
        value={formik.values.username}
        onChange={formik.handleChange}
        margin={'normal'}
        error={authError}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        margin={'normal'}
        error={authError}
      />
      {authError && <Typography variant={'caption'} color={'red'}>Incorrect username or password</Typography>}
      <Button type="submit">Submit</Button>
    </Box>

  );
};

export default LoginForm;
