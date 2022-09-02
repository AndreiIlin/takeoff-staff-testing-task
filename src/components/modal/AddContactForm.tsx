import { Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
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
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Field \'First name\' cant`t be empty'),
    phone: Yup.string()
      .required('Field \'Phone number\' cant`t be empty'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={
        (values) => {
          dispatch(addContact(values));
          handleClose();
        }
      }
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        // <>
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Add new contact</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth margin={'normal'} label="First name" name="firstName"
              value={values.firstName} onChange={handleChange}
              error={!!errors.firstName}
            />
            <ErrorMessage name="firstName">
              {msg => <Typography variant={'caption'} color={'red'}>{msg}</Typography>}
            </ErrorMessage>
            <TextField
              fullWidth margin={'normal'} label="Last name" name="lastName"
              value={values.lastName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="Phone number" name="phone"
              value={values.phone} onChange={handleChange}
              error={!!errors.phone}
            />
            <ErrorMessage name="phone">
              {msg => <Typography variant={'caption'} color={'red'}>{msg}</Typography>}
            </ErrorMessage>
            <TextField
              fullWidth margin={'normal'} label="Avatar image" name="image"
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
