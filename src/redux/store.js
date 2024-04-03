// import { createStore } from 'redux';
// import { initialState } from './initialState';
import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducers/contactsReducer';
// import { filterReducer } from './reducers/filterReducer';

export const store = configureStore({
  reducer,
});
