import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IContact} from '../models';

interface IModalsState {
  isOpened: boolean;
  type: string | null,
  extra: IContact | null,
}

const initialState: IModalsState = {
  isOpened: false,
  type: null,
  extra: null,
};

type openModalPayload = {
  type: string,
  extra: IContact | null,
}

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, {payload}: PayloadAction<openModalPayload>) => {
      const {type, extra} = payload;
      state.isOpened = true;
      state.type = type;
      state.extra = extra ?? null;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.type = null;
      state.extra = null;
    },
  },
})

export const {openModal, closeModal} = modalsSlice.actions;
export default modalsSlice.reducer;
