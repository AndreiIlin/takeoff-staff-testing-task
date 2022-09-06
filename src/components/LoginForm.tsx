import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAppDispatch } from '../hooks/defaultHooks';
import { ILoginData } from '../models';
import { logIn } from '../slices/AuthSlice';
import { routes } from '../utils/routes';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [authError, setAuthError] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Field \'Username\' cant`t be empty'),
    password: Yup.string()
      .required('Field \'Password\' cant`t be empty'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post<ILoginData>(routes.loginData(), values);
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
        value={formik.values.username}
        onChange={formik.handleChange}
        margin={'normal'}
        error={authError || !!formik.errors.username}
      />
      {formik.touched.username && formik.errors.username ?
        <Typography variant={'caption'} color={'red'}>{formik.errors.username}</Typography> : null
      }
      <TextField
        id="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        margin={'normal'}
        error={authError || !!formik.errors.password}
      />
      {formik.touched.password && formik.errors.password ?
        <Typography variant={'caption'} color={'red'}>{formik.errors.password}</Typography> : null
      }
      {authError && <Typography variant={'caption'} color={'red'}>Incorrect username or password</Typography>}
      <Button sx={{ mt: 3 }} type="submit">Submit</Button>
    </Box>
  );
};

export default LoginForm;
