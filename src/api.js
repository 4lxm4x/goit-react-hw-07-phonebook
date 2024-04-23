import axios from 'axios';

axios.defaults.baseURL = 'https://660c46983a0766e85dbdd178.mockapi.io';

export async function fetchAll() {
  return await axios.get('/contacts');
}

export async function addContact(contact) {
  await axios.post('/contacts', JSON.stringify(contact));
}
export async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);
}
