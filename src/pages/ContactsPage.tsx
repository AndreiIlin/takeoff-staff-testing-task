import { Alert, CircularProgress, Container } from '@mui/material';
import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import { useAppDispatch, useAppSelector } from '../hooks/defaultHooks';
import { selectors } from '../slices/contactsSlice';
import { fetchData } from '../slices/thunks/fetchData';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.contacts);
  const contacts = useAppSelector(selectors.selectIds);

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Container>
      {isLoading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {contacts && contacts.map((contact) => (
        <Contact key={contact} id={contact} />
      ))}

    </Container>
  );
};

export default ContactsPage;
