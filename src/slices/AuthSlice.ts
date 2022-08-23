import {createSlice} from '@reduxjs/toolkit';

interface IAuthState {
  isAuth: boolean,
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
    logIn: (state, {payload}) => {
      localStorage.setItem('contactsApp', JSON.stringify(payload));
    },
    logOut: () => {
      localStorage.removeItem('contactsApp');
    },
  },
});
