import { Button, DialogActions, DialogTitle } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../hooks/defaultHooks';
import { IModalProps } from '../../models';

const RemoveContactForm: React.FC<IModalProps> = ({ handleClose }) => {
  const contactData = useAppSelector((state) => state.modals.extra);

  return (
    <>
      <DialogTitle>
        {`Are you sure you want to delete ${contactData?.firstName} ${contactData?.lastName} contact?`}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Delete</Button>
      </DialogActions>
    </>
  );
};

export default RemoveContactForm;
