import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/defaultHooks';
import { IContact, IModalProps } from '../../models';
import { changeContact } from '../../slices/thunks/changeContact';

const ChangeContactForm: React.FC<IModalProps> = ({ handleClose }) => {
  const contactData = useAppSelector((state) => state.modals.extra);
  const dispatch = useAppDispatch();
  const initialValues: IContact = {
    id: contactData!.id,
    firstName: contactData!.firstName,
    lastName: contactData!.lastName,
    phone: contactData!.phone,
    image: contactData!.image,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={
        (values) => {
          dispatch(changeContact(values));
          handleClose();
        }
      }
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Edit contact</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth margin={'normal'} label="First name" name="firstName" required
              value={values.firstName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="Last name" name="lastName"
              value={values.lastName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="Phone number" name="phone" required
              value={values.phone} onChange={handleChange}
            />
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

export default ChangeContactForm;
