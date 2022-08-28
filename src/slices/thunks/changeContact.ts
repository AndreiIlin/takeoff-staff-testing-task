import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { routes } from '../../utils/routes';

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (data: any) => {
    const response = await axios.patch(routes.contactById(), data);
    console.log(response);
  },
);
