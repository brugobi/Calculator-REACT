import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  return (
    <>
      <div>
        <Button name="AC" handleOnClick={handleClick} />
        <Button name="+/-" handleOnClick={handleClick} />
        <Button name="%" handleOnClick={handleClick} />
        <Button name="÷" handleOnClick={handleClick} />
      </div>
      <div>
        <Button name="7" handleOnClick={handleClick} />
        <Button name="8" handleOnClick={handleClick} />
        <Button name="9" handleOnClick={handleClick} />
        <Button name="x" handleOnClick={handleClick} />
      </div>
      <div>
        <Button name="4" handleOnClick={handleClick} />
        <Button name="5" handleOnClick={handleClick} />
        <Button name="6" handleOnClick={handleClick} />
        <Button name="-" handleOnClick={handleClick} />
      </div>
      <div>
        <Button name="1" handleOnClick={handleClick} />
        <Button name="2" handleOnClick={handleClick} />
        <Button name="3" handleOnClick={handleClick} />
        <Button name="+" handleOnClick={handleClick} />
      </div>
      <div>
        <Button name="0" handleOnClick={handleClick} />
        <Button name="." handleOnClick={handleClick} />
        <Button name="=" handleOnClick={handleClick} />
      </div>

    </>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
