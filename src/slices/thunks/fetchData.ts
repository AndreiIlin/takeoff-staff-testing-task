import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IContact } from '../../models';
import { routes } from '../../utils/routes';

export const fetchData = createAsyncThunk<IContact[], void, { rejectValue: string }>(
  'contacts/fetchData',
  async (_, { rejectWithValue }) => {
    const response: AxiosResponse<IContact[], void> = await axios.get<IContact[]>(routes.contactsData());

    if (response.status !== 200) {
      rejectWithValue('Server error!');
    }
    return response.data;
  });
