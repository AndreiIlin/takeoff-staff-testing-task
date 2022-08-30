import { MoreVert } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../hooks/defaultHooks';
import { IContact } from '../models';
import { openModal } from '../slices/ModalsSlice';

interface IContactMenuProps {
  contact: IContact;
}

const ContactMenu: React.FC<IContactMenuProps> = ({ contact }) => {
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
    dispatch(openModal({ type: 'removeContact', extra: contact }));
    handleClose();
  };

  const handleEditContact = () => {
    dispatch(openModal({ type: 'changeContact', extra: contact }));
    handleClose();
  };
  return (
    <>
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
    </>
  );
};

export default ContactMenu;
