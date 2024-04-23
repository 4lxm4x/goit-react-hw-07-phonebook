import { useDispatch, useSelector } from 'react-redux';
import './Contacts.css';

// import { useEffect } from 'react';
import { deleteContact } from '../../redux/operations/operations';
// import { createSelector } from '@reduxjs/toolkit';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    console.log('rerender with new', state.contacts.items);
    return state.contacts.items;
  });
  const filter = useSelector(state => state.filter);

  function onDelete(e) {
    console.log(e.target.id);
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
            {contact.name}: {contact.phone}
            <button className="deleteBtn" onClick={onDelete} id={contact.id}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
