import React, {useContext} from "react";
import FormContext from "../context/FormContext";

const WelcomeMessage = (props) => {
  const formContext = useContext( FormContext);
  console.log(formContext)
  console.log(props)
  const isActive = () => (formContext.step === props.step ? true : false);

  const updateStep = () => formContext.updateStep(props.step);


    return (
      <button
        className={isActive() ? `active` : ``}
        disabled={formContext.step === `completed` ? true : false}
        onClick={updateStep}
      >
        {props.step}
      </button>
    )
}

export default WelcomeMessage;
