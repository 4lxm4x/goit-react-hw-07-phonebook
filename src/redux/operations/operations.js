import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.fetchAll();

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, rejectWithValue) => {
    try {
      await API.addContact(contact);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, rejectWithValue) => {
    try {
      await API.deleteContact(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
