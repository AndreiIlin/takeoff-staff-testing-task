import { Alert, CircularProgress, Container, Snackbar } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import Contact from '../components/Contact';
import ContactsBar from '../components/ContactsBar';
import ModalWindow from '../components/modal/ModalWindow';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { clearError, selectors } from '../slices/contactsSlice';
import { fetchContacts } from '../slices/thunks/fetchContacts';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.contacts);
  const contacts = useAppSelector(selectors.selectAll);
  const [searchValue, SetSearchValue] = useState('');
  const searchedContacts = useMemo(() => {
    return contacts.filter((c) => `${c.firstName}${c.lastName}${c.phone}`.includes(searchValue));
  }, [contacts, searchValue]);
  const hideError = () => dispatch(clearError());

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      {isLoading && <CircularProgress sx={{ margin: '10px auto' }} />}
      {contacts && <ContactsBar searchValue={searchValue} SetSearchValue={SetSearchValue} />}
      {contacts && searchedContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={hideError}>
        <Alert onClose={hideError} severity="error">{error?.message}</Alert>
      </Snackbar>
      <ModalWindow />
    </Container>
  );
};

export default ContactsPage;
