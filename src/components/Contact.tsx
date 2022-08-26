import { MoreVert } from '@mui/icons-material';
import { Avatar, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { EntityId } from '@reduxjs/toolkit';
import React from 'react';
import { useAppSelector } from '../hooks/defaultHooks';
import { selectors } from '../slices/contactsSlice';

interface IContactProps {
  id: EntityId;
}

const Contact: React.FC<IContactProps> = ({ id }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const contact = useAppSelector((state) => selectors.selectById(state, id));

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
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
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
