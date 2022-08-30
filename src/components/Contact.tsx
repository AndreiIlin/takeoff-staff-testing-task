import { MoreVert } from '@mui/icons-material';
import { Avatar, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { EntityId } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { IContact } from '../models';
import { selectors } from '../slices/contactsSlice';
import { openModal } from '../slices/ModalsSlice';

interface IContactProps {
  contact: IContact;
}

const Contact: React.FC<IContactProps> = ({ contact }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();

  const handleRemoveContact = () => {
    dispatch(openModal({type: 'removeContact', extra: contact}));
    handleClose();
  }

  const handleEditContact = () => {
    dispatch(openModal({type: 'changeContact', extra: contact}));
    handleClose();
  }

  return (
    <Grid container m={1} mx={'auto'} maxWidth={500} justifyContent={'center'} alignItems={'center'} border={1}>
      <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }} item>
        <Avatar
          sx={{ width: 100, height: 100 }}
          src={contact?.image}
          alt={contact?.firstName}
        />
      </Grid>
      <Grid xs={8} item>
        <Grid container>
          <Grid xs={10} item>
            <Typography variant={'h6'}>{contact?.firstName + ' ' + contact?.lastName}</Typography>
          </Grid>
          <Grid xs={2} item >
            <IconButton
              aria-label="actions"
              id="menu-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVert fontSize={'large'} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
            >
              <MenuItem onClick={handleEditContact}>Edit</MenuItem>
              <MenuItem onClick={handleRemoveContact}>Delete</MenuItem>
            </Menu>
          </Grid>
          <Grid xs={10} item>
            <Typography>{contact?.phone}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
