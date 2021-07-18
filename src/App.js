import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const isInContacts = this.state.contacts.some(contact => contact.name === name)
    if (isInContacts) { alert(`${name} is already in contacts.`); return }
    
    if (name && number) {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = (contactId => {
    this.setState( prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)}))
    }
  );

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  render() {
    const { contacts, filter } = this.state;
    const totalContactsCount = contacts.length;

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAddContact={this.addContact} />

        <h2>Contacts (total: {totalContactsCount}) </h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>        
    );
  }  
}

export default App;
