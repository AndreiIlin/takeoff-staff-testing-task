import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IContact } from '../models';
import { RootState } from './index';
import { fetchData } from './thunks/fetchData';

interface IExtraInitialState {
  isLoading: boolean,
  error: string | undefined,
}

const extraInitialState: IExtraInitialState = {
  isLoading: false,
  error: '',
};

const contactsAdapter = createEntityAdapter<IContact>();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState(extraInitialState),
  reducers: {
    addContacts: contactsAdapter.addMany,
    addContact: contactsAdapter.addOne,
    changeContact: contactsAdapter.updateOne,
    removeContact: contactsAdapter.removeOne,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        contactsAdapter.addMany(state, payload);
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { addContacts, addContact, removeContact, changeContact } = contactsSlice.actions;
export const selectors = contactsAdapter.getSelectors((state: RootState) => state.contacts);
export default contactsSlice.reducer;
