import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { logOut } from '../slices/AuthSlice';

const Navbar: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogoutButton = () => {
    dispatch(logOut());
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography sx={{ flexGrow: 1 }} variant="h6" color="inherit" component="div">
          Contacts App
        </Typography>
        {isAuth && <Button onClick={handleLogoutButton} variant={'outlined'} color={'inherit'}>Logout</Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
