import axios from 'axios';

axios.defaults.baseURL = 'https://660c46983a0766e85dbdd178.mockapi.io';

export async function fetchAll() {

  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;


}
