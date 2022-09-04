import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginData } from '../models';

interface IAuthState {
  isAuth: boolean;
}

const initialState: IAuthState = {
  isAuth: !!localStorage.getItem('contactsApp'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getToken: () => {
      const user = localStorage.getItem('contactsApp');
      if (user) {
        return JSON.parse(user).token;
      }
    },
    logIn: (state, { payload }: PayloadAction<ILoginData>) => {
      localStorage.setItem('contactsApp', JSON.stringify(payload));
      state.isAuth = true;
    },
    logOut: (state) => {
      localStorage.removeItem('contactsApp');
      state.isAuth = false;
    },
  },
});

export const { logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
