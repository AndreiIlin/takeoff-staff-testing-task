import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  isAuth: boolean,
}

type logInPayload = {
  username: string,
  // token: string,
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
    logIn: (state, { payload }: PayloadAction<logInPayload>) => {
      localStorage.setItem('contactsApp', JSON.stringify(payload));
      state.isAuth = true;
    },
    logOut: (state) => {
      localStorage.removeItem('contactsApp');
      state.isAuth = false;
    },
  },
});

export const { getToken, logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
