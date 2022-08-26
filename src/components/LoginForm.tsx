import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <Box
      component="form"
      border="1px solid black"
      maxWidth="500px"
      p="30px 15px"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
    >
      <TextField id="username" name="username" label="Username" required />
      <TextField id="password" name="password" label="Password" required />
      <Button type="submit">Submit</Button>
    </Box>

  );
};

export default LoginForm;
