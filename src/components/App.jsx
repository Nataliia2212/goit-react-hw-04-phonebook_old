import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts:[{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts:parsedContacts})
    }
    
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  handleChange = event => {
    const { name, value} = event.currentTarget
    this.setState({ [name]: value})
  }
    
  getVisibledContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = (contactId) => {
    this.setState(prevState =>
      ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId), }));
  }

  addContact = contact => {
    this.setState(prevState =>
      ({ contacts: [contact, ...prevState.contacts]}))
  }

render() {
  const { contacts,  filter } = this.state;
  const visibleContacts = this.getVisibledContact();
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
        onSubmit={this.addContact}
        contacts={contacts} />
      <h2>Contacts</h2>
      <Filter
        onChange={this.handleChange}
        filter={filter} />
      <ContactList
        visibleContacts={visibleContacts}
        onDeleteContact={this.deleteContact}
      />
    </div>
  )
}}
  
