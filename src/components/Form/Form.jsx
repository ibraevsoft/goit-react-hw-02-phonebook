import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addUser({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form className={style.form} onSubmit={this.submitHandler}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={style.label}>
            Number
            <input
              className={style.input}
              onChange={this.handleChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={style.btn}>Add contact</button>
        </form>
      </>
    );
  }
}

export default Form;

Form.popTypes = {
  handleChange: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
