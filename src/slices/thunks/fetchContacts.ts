import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact } from '../../models';
import { routes } from '../../utils/routes';

export const fetchContacts = createAsyncThunk<IContact[]>(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get<IContact[]>(routes.contactsData());
    return response.data;
  });
