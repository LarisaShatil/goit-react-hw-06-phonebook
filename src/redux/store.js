import { configureStore, getDefaultMiddleware, createReducer, createAction } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// import { persistedClicksReducer } from './clicksSlice';
import { defaultContacts } from '../components/defaultContactList';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: {
    // items: [defaultContacts],
    items: [],
    filter: '' 
  }
};


export const addContact = createAction('contacts/addContact')
export const deleteContact = createAction('contacts/deleteContact')

const contactReducer = createReducer(defaultContacts, {
  [addContact]: (state, action) => [ action.payload, ...state],
  [deleteContact]: (state, action) => {
    return state.filter((item) => item.id !== action.payload)
  }
});

export const store = configureStore({
  reducer: {
contacts: contactReducer
  },
  initialState,
});