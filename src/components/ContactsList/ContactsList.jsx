import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
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

ContactsList.propTypes = {
  removeContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
