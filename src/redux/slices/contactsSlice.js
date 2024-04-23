import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    // addContact(state, action) {
    //   state.push(action.payload);
    // },
    // deleteContact(state, action) {
    //   return state.filter(contact => {
    //     return contact.id !== action.payload;
    //   });
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          items: action.payload,
        };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(addContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, state => {
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, state => {
        return {
          ...state,
          isLoading: false,
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
