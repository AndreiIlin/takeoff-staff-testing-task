import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../hooks/defaultHooks';
import { openModal } from '../slices/ModalsSlice';

interface IContactsBarProps {
  searchValue: string,
  SetSearchValue: Dispatch<SetStateAction<string>>
}

const ContactsBar: React.FC<IContactsBarProps> = ({ searchValue, SetSearchValue }) => {
  const dispatch = useAppDispatch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    SetSearchValue(e.target.value);
  };
  const handleAddContact = () => {
    dispatch(openModal({ type: 'addContact', extra: null }));
  };

  return (
    <AppBar color={'inherit'} position={'static'} sx={{ maxWidth: 500, marginX: 'auto', marginY: 2 }}>
      <Toolbar>
        <Typography sx={{ fontWeight: 'bold' }}>Search:</Typography>
        <TextField size={'small'} sx={{ marginX: 3 }} value={searchValue} onChange={handleSearch} />
        <Button onClick={handleAddContact}>Add new contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ContactsBar;
