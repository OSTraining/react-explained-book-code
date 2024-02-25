import React, { useContext } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import WelcomeMessage from './WelcomeMessage';
import UserContext from '../context/UserContext';
import FormContext from '../context/FormContext';

const SignUpForm = (props) => {
  const userContext = useContext(UserContext);
  const formContext = useContext(FormContext);

  const updateUser = (event) => {
    const value = event.target.value;
    const field = event.target.id;
    console.log(userContext.user)
    const user = userContext.user;
    user[field] = value;
    userContext.updateUser(user);
  };

  const currentStep = ({ step, updateStep }) => {
    switch (step) {
      case `1`:
        return (
          <Step1 user={userContext.user} updateUser={updateUser} nextStep='2' />
        );
      case `2`:
        return (
          <Step2 user={userContext.user} updateUser={updateUser} nextStep='3' />
        );
      case `3`:
        return (
          <Step3
            user={userContext.user}
            updateUser={updateUser}
            nextStep='completed'
          />
        );
      case `completed`:
        return <WelcomeMessage />;
      default:
        return (
          <button type='submit' onClick={() => updateStep(`1`)}>
            Get Started!
          </button>
        );
    }
  };

  return (
    <form>
      <FormContext.Consumer>
        {(formContext) => currentStep(formContext)}
      </FormContext.Consumer>
    </form>
  );
};

export default SignUpForm;
