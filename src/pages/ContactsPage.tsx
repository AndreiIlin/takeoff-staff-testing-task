import { Alert, CircularProgress, Container, Snackbar } from '@mui/material';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { clearError, selectors } from '../slices/contactsSlice';
import { fetchData } from '../slices/thunks/fetchData';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.contacts);
  const contacts = useAppSelector(selectors.selectIds);
  const hideError = () => dispatch(clearError());

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Container>
      {isLoading && <CircularProgress sx={{margin: '10px auto'}} />}
      {contacts && contacts.map((contact) => (
        <Contact key={contact} id={contact} />
      ))}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={hideError}>
        <Alert onClose={hideError} severity="error">{error?.message}</Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactsPage;
