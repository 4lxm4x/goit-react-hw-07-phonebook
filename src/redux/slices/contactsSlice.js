import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { fetchContacts } from '../operations/operations';
// import { fetchAll } from 'api';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => {
        return contact.id !== action.payload;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return { ...state, items: action.payload, isLoading: false };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, error: action.payload };
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
