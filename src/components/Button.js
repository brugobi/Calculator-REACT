import React from 'react';
import '../index.css';
import PropTypes from 'prop-types';

const Button = ({
  name, handleOnClick, color, wide,
}) => (
  <button className={`${color} ${wide}`} type="button" onClick={() => handleOnClick(name)}>{ name }</button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
