import { Component } from 'react';

export class FormContact extends Component {
  state = { name: '', number: '' };

  leverArmChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  inputName(name) {
    const contacts = this.props.contacts;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact name already exists!');
      return true;
    }
    return false;
  }

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  leverArmSubmit = e => {
    const name = e.target.name.value;
    const number = e.target.number.value;
    e.preventDefault();

    if (this.inputName(name)) return;
    this.props.addContact(name, number);
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.leverArmSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.leverArmChange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.leverArmChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormContact;
