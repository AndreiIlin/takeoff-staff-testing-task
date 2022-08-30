import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact } from '../../models';
import { routes } from '../../utils/routes';

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (data:IContact) => {
    const response = await axios.patch<IContact>(routes.contactById(data.id), data);
    return response.data;
  },
);
