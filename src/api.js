import axios from 'axios';

axios.defaults.baseURL = 'https://660c46983a0766e85dbdd178.mockapi.io';

export async function fetchAll() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact() {
  axios.post('/contacts');
}

export async function deleteContact(id) {
  axios.delete(`/contacts/${id}`);
}
