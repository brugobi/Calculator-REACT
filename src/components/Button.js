import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Button = ({ name, handleOnClick }) => (
  <button type="button" onClick={() => handleOnClick(name)}>{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
