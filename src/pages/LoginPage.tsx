import { Container } from '@mui/material';
import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container sx={{ mt: '1rem' }}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
