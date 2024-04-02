import { useDispatch, useSelector } from 'react-redux';
import './Contacts.css';
import { deleteContact } from '../../redux/slices/contactsSlice';
// import { createSelector } from '@reduxjs/toolkit';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  function onDelete(e) {
    dispatch(deleteContact(e.target.id));
  }

  let filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button className="deleteBtn" onClick={onDelete} id={contact.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
