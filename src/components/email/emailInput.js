import React, { useState, useRef } from "react";
import Button from "../buttons/button";
import { isEmailValid } from "../../utility";

const EmailInput = ({ status, message, onValidated }) => {
  console.log(status);
  console.log(message);
  console.log(onValidated);

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
    if (isEmailValid(value)) {
      onValidated({ value });
    } else {
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
      <Button text={status === "sending" ? "Sending.." : "Submit"} clickHandler={onSubmit} />
      {status === "success" && <p className="msg">Thank You for Subscribing!<span style={{ fontSize: "1.5rem", color: "green" }}>&#10004;</span></p>}
      {status === "error" && <p className="msg error">Email is already subscribed to Glams List. Please try with different email</p>}
    </div>
  );
};

export default EmailInput;
