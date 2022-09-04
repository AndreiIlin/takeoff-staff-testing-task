import { Alert, CircularProgress, Container, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import ContactsList from '../components/ContactsList';
import ModalWindow from '../components/modal/ModalWindow';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { clearError, selectors } from '../slices/contactsSlice';
import { fetchContacts } from '../slices/thunks/fetchContacts';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.contacts);
  const contacts = useAppSelector(selectors.selectAll);
  const hideError = () => dispatch(clearError());

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <CircularProgress sx={{ display: 'block', margin: '40px auto' }} />}
      {contacts.length > 0 && <ContactsList />}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={hideError}>
        <Alert onClose={hideError} severity="error">{error?.message}</Alert>
      </Snackbar>
      <ModalWindow />
    </Container>
  );
};

export default ContactsPage;
