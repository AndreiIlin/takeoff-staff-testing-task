import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact } from '../../models';
import { routes } from '../../utils/routes';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data: Omit<IContact, 'id'>) => {
    const response = await axios.post<IContact>(routes.contactsData(), data);
    return response.data;
  }
)
