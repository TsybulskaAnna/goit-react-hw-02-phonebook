import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsItem
            name={name}
            number={number}
            key={id}
            id={id}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;