import {configureStore} from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import modalsReducer from './ModalsSlice';
import contactsReducer from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    modals: modalsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
