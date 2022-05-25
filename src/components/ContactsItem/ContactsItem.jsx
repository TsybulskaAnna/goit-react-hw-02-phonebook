import PropTypes from 'prop-types';


const ContactsItem = ({ id, name, number, removeContact }) => {
  return (
    <li >
      {name}: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
