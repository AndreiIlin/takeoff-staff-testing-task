import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {IContact} from '../models';
import {RootState} from './index';

interface IExtraInitialState {
  isLoading: boolean,
  error: string,
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
});

export const { addContacts, addContact, removeContact, changeContact } = contactsSlice.actions;
export const selectors = contactsAdapter.getSelectors((state: RootState) => state.contacts);
export default contactsSlice.reducer;
