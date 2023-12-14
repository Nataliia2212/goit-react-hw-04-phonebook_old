import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export default function App() {
    const [contacts, setContacts] = useState([{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]);
    const [filter, setFilter] = useState('');
 
//   useEffect (() => {
//  const contacts = localStorage.getItem('contacts');
//     // const parsedContacts = JSON.parse(contacts)
//     // if (parsedContacts) {
//     //   setContacts({contacts:parsedContacts})
//     // }
//   })

  
  // componentDidUpdate(prevProps, prevState) {

  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  const handleChange = event => {
    const { name, value } = event.currentTarget
    console.log(name, value)
    setFilter({ [name]: value})
  }
    
  const getVisibledContact = () => {
    console.log(filter)
    // const normalizedFilter = filter.toLowerCase();
    const normalizedFilter = filter;
    console.log(normalizedFilter)
    console.log(contacts)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  }

  const deleteContact = (contactId) => {
    setContacts(prevState =>
      ({ contacts: prevState.filter(contact => contact.id !== contactId), }));
  }

  const addContact = (contact) => {
    setContacts(prevState =>
      ({ contacts: [ ...prevState, contact]}))
  }


  const visibleContacts = getVisibledContact();
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 26,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={addContact}
        contacts={contacts} />
      <h2>Contacts</h2>
      <Filter
        onChange={handleChange}
        filter={filter}
      />
      <ContactList
        visibleContacts={visibleContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  )
}
  
