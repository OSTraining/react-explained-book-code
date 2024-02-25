import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

const ProgressBar = () => {
  const formContext = useContext(FormContext);

  const getPercent = () => {
    switch (formContext.step) {
      case `2`:
        return 33;
      case `3`:
        return 66;
      case `completed`:
        return 100;
      default:
        return 1;
    }
  };

  return (
    <>
      <p>Progress</p>
      <div
        style={{
          height: `10px`,
          width: `300px`,
          border: `1px #ccc solid`,
          background: `#efefef`,
        }}>
        <div
          style={{
            height: `100%`,
            background: `green`,
            width: `${getPercent()}%`,
          }}
        />
      </div>
    </>
  );
};
export default ProgressBar;
