import { createEntityAdapter, createSlice, SerializedError } from '@reduxjs/toolkit';
import { IContact } from '../models';
import { RootState } from './index';
import { changeContact } from './thunks/changeContact';
import { fetchContacts } from './thunks/fetchContacts';
import { removeContact } from './thunks/removeContact';

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
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        contactsAdapter.addMany(state, payload);
      })
      .addCase(changeContact.fulfilled, (state, { payload }) => {
        contactsAdapter.updateOne(state, { id: payload.id, changes: payload });
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        contactsAdapter.removeOne(state, payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { clearError } = contactsSlice.actions;
export const selectors = contactsAdapter.getSelectors((state: RootState) => state.contacts);
export default contactsSlice.reducer;
