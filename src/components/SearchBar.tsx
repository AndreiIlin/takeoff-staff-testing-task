import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../hooks/defaultHooks';
import { openModal } from '../slices/ModalsSlice';

interface IContactsBarProps {
  searchValue: string,
  SetSearchValue: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<IContactsBarProps> = ({ searchValue, SetSearchValue }) => {
  const dispatch = useAppDispatch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    SetSearchValue(e.target.value);
  };
  const handleAddContact = () => {
    dispatch(openModal({ type: 'addContact', extra: null }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        maxWidth: '500px',
        marginX: 'auto',
        marginY: '30px',
      }}
    >
      <TextField
        size={'small'}
        value={searchValue}
        aria-label={'Search'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleSearch}
      />
      <Button variant={'outlined'} color={'inherit'} onClick={handleAddContact}>Add new contact</Button>
    </Box>
  );
};

export default SearchBar;
