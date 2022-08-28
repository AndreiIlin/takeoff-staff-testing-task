import { Dialog } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/defaultHooks';
import { IModalProps } from '../../models';
import { closeModal } from '../../slices/ModalsSlice';
import AddContactForm from './AddContactForm';
import ChangeContactForm from './ChangeContactForm';
import RemoveContactForm from './RemoveContactForm';

type Mapping = {
  [key: string]: React.FC<IModalProps>;
};

const mapping: Mapping = {
  addContact: AddContactForm,
  removeContact: RemoveContactForm,
  changeContact: ChangeContactForm,
};

const ModalWindow: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpened, type } = useAppSelector((state) => state.modals);
  const handleClose = () => {
    dispatch(closeModal());
  };
  const Component = type ? mapping[type] : null;

  return (
    <Dialog open={isOpened} onClose={handleClose}>
      {Component && <Component handleClose={handleClose} />}
    </Dialog>
  );
};

export default ModalWindow;
