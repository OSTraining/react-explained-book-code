import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const WelcomeMessage = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {userContext.user.name}!</h1>
      <p>Your account info has been sent to {userContext.user.email}.</p>
    </div>
  );
};

export default WelcomeMessage;
