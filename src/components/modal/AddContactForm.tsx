import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../hooks/defaultHooks';
import { IContact, IModalProps } from '../../models';
import { addContact } from '../../slices/thunks/addContact';

const AddContactForm: React.FC<IModalProps> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const initialValues: Omit<IContact, 'id'> = {
    firstName: '',
    lastName: '',
    phone: '',
    image: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={
        (values) => {
          dispatch(addContact(values));
          handleClose();
        }
      }
    >
      {({ values, handleChange, handleSubmit }) => (
        // <>
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Add new contact</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth margin={'normal'} label="firstName" name="firstName" required
              value={values.firstName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="lastName" name="lastName"
              value={values.lastName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="phone" name="phone" required
              value={values.phone} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="image" name="image"
              value={values.image} onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Confirm</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
};

export default AddContactForm;
