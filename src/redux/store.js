// import { createStore } from 'redux';
// import { initialState } from './initialState';
import { reducer } from './reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducers/contactsReducer';
// import { filterReducer } from './reducers/filterReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
