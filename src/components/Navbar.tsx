import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Contacts App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
