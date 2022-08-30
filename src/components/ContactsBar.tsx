import { AppBar, Button, TextField, Toolbar, Typography } from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface ContactsBarProps {
  searchValue: string,
  SetSearchValue: Dispatch<SetStateAction<string>>
}

const ContactsBar: React.FC<ContactsBarProps> = ({ searchValue, SetSearchValue }) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    SetSearchValue(e.target.value);
  };

  return (
    <AppBar color={'inherit'} position={'static'} sx={{ maxWidth: 500, marginX: 'auto', marginY: 2 }}>
      <Toolbar>
        <Typography sx={{ fontWeight: 'bold'}}>Search:</Typography>
        <TextField size={'small'} sx={{ marginX: 3 }} value={searchValue} onChange={handleSearch} />
        <Button>Add new contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ContactsBar;
