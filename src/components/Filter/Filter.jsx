import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <>
        <label className={style.label}>
          Find contacts by name
          <input
            className={style.input}
            name="filter"
            onChange={this.props.handleChange}
            value={this.props.filter}
            type="text"
          />
        </label>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
