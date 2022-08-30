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
        // <>
        <Form onSubmit={handleSubmit}>
          <DialogTitle>Edit contact</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth margin={'normal'} label="firstName" name="firstName" required
              value={values.firstName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="lastName" name="lastName" required
              value={values.lastName} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="phone" name="phone" required
              value={values.phone} onChange={handleChange}
            />
            <TextField
              fullWidth margin={'normal'} label="image" name="image" required
              value={values.image} onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Confirm</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Form>
        // </>
      )}
    </Formik>
  );
};

export default ChangeContactForm;
