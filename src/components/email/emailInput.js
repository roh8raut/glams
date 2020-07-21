import React, { useState, useRef } from "react";
import Button from "../buttons/button";
import { isEmailValid } from "../../utility";

const EmailInput = () => {
  const [isValidEmail, setIsValidEmail] = useState(true);
  const emailRef = useRef(null);

  // On keypress
  const onKeyPress = (value) => {
    if (isEmailValid(value)) {
      setIsValidEmail(true);
      return true;
    }
    return false;
  };

  // OnSubmit button click
  const onSubmit = () => {
    const value = emailRef.current.value;
    if (!isEmailValid(value)) {
      setIsValidEmail(false);
    }
  };

  return (
    <div className="email-input-container">
      <div style={{ display: "inline-flex", flexDirection: "column" }}>
        <input
          ref={emailRef}
          className="email--input"
          type="text"
          onChange={(e) => onKeyPress(e.target.value)}
          placeholder="Enter Email"
        />
        {!isValidEmail && (
          <span className="error">please enter a valid email</span>
        )}
      </div>
      <Button text="Submit" clickHandler={onSubmit} />
    </div>
  );
};

export default EmailInput;
