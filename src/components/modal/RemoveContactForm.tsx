import { Button, DialogActions, DialogTitle } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/defaultHooks';
import { IModalProps } from '../../models';
import { removeContact } from '../../slices/thunks/removeContact';

const RemoveContactForm: React.FC<IModalProps> = ({ handleClose }) => {
  const contactData = useAppSelector((state) => state.modals.extra);
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contactData!.id))
    handleClose();
  }

  return (
    <>
      <DialogTitle>
        {`Are you sure you want to delete ${contactData?.firstName} ${contactData?.lastName} contact?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRemove}>Delete</Button>
      </DialogActions>
    </>
  );
};

export default RemoveContactForm;
