import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = API.fetchAll;
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
