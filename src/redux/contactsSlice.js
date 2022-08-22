import { createSlice } from '@reduxjs/toolkit';
import { defaultContacts } from '../components/defaultContactList';

// Slice
const contactSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
    
  reducers: {
    addContact(state, action) { return [action.payload, ...state] },
    deleteContact(state, action) {
      return state.filter((item) => item.id !== action.payload)
    }
  }
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;