import axios from 'axios';

axios.defaults.baseURL = 'https://660c46983a0766e85dbdd178.mockapi.io';

export const fetchAll = () => axios.get('/contacts');

export const addContact = () => axios.post('/contacts');

export const deleteContact = id => {
  axios.delete(`/contacts/${id}`);
};
