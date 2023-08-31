import React from "react";
import "./LearningOptions.css";
import { useSelector } from "react-redux";

const LearningOptions = (props) => {
  const user = useSelector((state) => state.age);
  const handleGotIt = () => {
    props.actionProvider.handleUserMessage("Got it!");
    props.actionProvider.inputName();

    props.actionProvider.handleUserNameInput();
  };

  return (
    <div className="learning-options-container">
      <button className="learning-option-button" onClick={handleGotIt}>
        Got it!
      </button>
    </div>
  );
};

export default LearningOptions;
