import { createEntityAdapter, createSlice, SerializedError } from '@reduxjs/toolkit';
import { IContact } from '../models';
import { RootState } from './index';
import { fetchData } from './thunks/fetchData';

interface IExtraInitialState {
  isLoading: boolean,
  error: SerializedError | null,
}

const extraInitialState: IExtraInitialState = {
  isLoading: false,
  error: null,
};

const contactsAdapter = createEntityAdapter<IContact>({
  sortComparer: (a, b) => a.firstName.localeCompare(b.firstName),
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState(extraInitialState),
  reducers: {
    addContacts: contactsAdapter.addMany,
    addContact: contactsAdapter.addOne,
    changeContact: contactsAdapter.updateOne,
    removeContact: contactsAdapter.removeOne,
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        contactsAdapter.addMany(state, payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { clearError, addContacts, addContact, removeContact, changeContact } = contactsSlice.actions;
export const selectors = contactsAdapter.getSelectors((state: RootState) => state.contacts);
export default contactsSlice.reducer;
