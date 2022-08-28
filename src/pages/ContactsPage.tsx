import { Alert, CircularProgress, Container, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import ModalWindow from '../components/modal/ModalWindow';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { clearError, selectors } from '../slices/contactsSlice';
import { fetchContacts } from '../slices/thunks/fetchContacts';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.contacts);
  const contacts = useAppSelector(selectors.selectIds);
  const hideError = () => dispatch(clearError());

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      {isLoading && <CircularProgress sx={{ margin: '10px auto' }} />}
      {contacts && contacts.map((contact) => (
        <Contact key={contact} id={contact} />
      ))}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={hideError}>
        <Alert onClose={hideError} severity="error">{error?.message}</Alert>
      </Snackbar>
      <ModalWindow />
    </Container>
  );
};

export default ContactsPage;
