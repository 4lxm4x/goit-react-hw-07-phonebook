import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

import './App.css';

export default function App() {
  return (
    <div className="mainDiv">
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <Contacts></Contacts>
    </div>
  );
}
