import { FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <form>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" />
        </FormControl>
      </FormGroup>
    </form>
  );
};

export default LoginForm;
