import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

const StepButton = (props) => {
  const formContext = useContext(FormContext);

  const handleOnClick = () => {
    formContext.updateStep(props.nextStep);
  };

  return (
    <input
      className='step-button'
      type='submit'
      value={props.label || `Next`}
      onClick={handleOnClick}
    />
  );
};
export default StepButton;
