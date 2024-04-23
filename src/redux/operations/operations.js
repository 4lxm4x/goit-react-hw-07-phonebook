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
