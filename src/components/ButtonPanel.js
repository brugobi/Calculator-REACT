import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import Button from './Button';

const ButtonPanel = ({ onClick }) => (
  <>
    <div>
      <Button name="AC" handleOnClick={onClick} />
      <Button name="+/-" handleOnClick={onClick} />
      <Button name="%" handleOnClick={onClick} />
      <Button name="÷" handleOnClick={onClick} />
    </div>
    <div>
      <Button name="7" handleOnClick={onClick} />
      <Button name="8" handleOnClick={onClick} />
      <Button name="9" handleOnClick={onClick} />
      <Button name="x" handleOnClick={onClick} />
    </div>
    <div>
      <Button name="4" handleOnClick={onClick} />
      <Button name="5" handleOnClick={onClick} />
      <Button name="6" handleOnClick={onClick} />
      <Button name="-" handleOnClick={onClick} />
    </div>
    <div>
      <Button name="1" handleOnClick={onClick} />
      <Button name="2" handleOnClick={onClick} />
      <Button name="3" handleOnClick={onClick} />
      <Button name="+" handleOnClick={onClick} />
    </div>
    <div>
      <Button name="0" handleOnClick={onClick} />
      <Button name="." handleOnClick={onClick} />
      <Button name="=" handleOnClick={onClick} />
    </div>

  </>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
