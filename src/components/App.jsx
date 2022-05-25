import { Component } from 'react';

import { nanoid } from 'nanoid';

import FormContact from './ContactForm/ContactForm';
import Section from './Section';
import ContactsList from './ContactsList/ContactsList';
import Notification from './Notification/Notification';
import SearchContact from './SearchContact/SearchContact';


export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-0', name: 'wer', number: '232459-12-56' },
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const contacts = this.state.contacts;
    if (prevContacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  filterContacts() {
    const { filter, contacts } = this.state;
    if (filter) {
      return [
        ...contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        ),
      ];
    }
    return contacts;
  }

  addContact = (name, number) => {
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          name,
          number,
          id: nanoid(),
        },
      ],
    }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContact contacts={contacts} addContact={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length ? (
            <>
              <SearchContact
                searchValue={filter}
                handleChange={this.handleChange}
              />
              <ContactsList
                contacts={this.filterContacts()}
                removeContact={this.removeContact}
              />
            </>
          ) : (
            <Notification mess={'Phonebook is empty, add someone'} />
          )}
        </Section>
      </>
    );
  }
}
