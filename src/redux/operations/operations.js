import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await API.fetchAll;
    return response;
  } catch (error) {}
});
