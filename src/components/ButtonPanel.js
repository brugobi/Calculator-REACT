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
      <div className="btnPanel">
        <Button name="AC" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="+/-" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="%" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="÷" handleOnClick={handleClick} wide="btn25" color="orange" />
      </div>
      <div className="btnPanel">
        <Button name="7" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="8" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="9" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="x" handleOnClick={handleClick} wide="btn25" color="orange" />
      </div>
      <div className="btnPanel">
        <Button name="4" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="5" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="6" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="-" handleOnClick={handleClick} wide="btn25" color="orange" />
      </div>
      <div className="btnPanel">
        <Button name="1" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="2" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="3" handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="+" handleOnClick={handleClick} wide="btn25" color="orange" />
      </div>
      <div className="btnPanel">
        <Button name="0" handleOnClick={handleClick} wide="btnWider" color="gray" />
        <Button name="." handleOnClick={handleClick} wide="btn25" color="gray" />
        <Button name="=" handleOnClick={handleClick} wide="btn25" color="orange" />
      </div>

    </>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
