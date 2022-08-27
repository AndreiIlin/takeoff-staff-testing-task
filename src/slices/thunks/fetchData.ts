import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IContact } from '../../models';
import { routes } from '../../utils/routes';

export const fetchData = createAsyncThunk<IContact[]>(
  'contacts/fetchData',
  async () => {
    const response = await axios.get<IContact[]>(routes.contactsData());
    return response.data;
  });
