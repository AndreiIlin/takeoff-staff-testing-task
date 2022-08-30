import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { routes } from '../../utils/routes';

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id: number) => {
    await axios.delete<{}>(routes.contactById(id));
    return id;
  }
)
