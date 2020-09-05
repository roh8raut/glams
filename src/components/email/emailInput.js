import React, { useState, useRef } from "react";
import Button from "../buttons/button";
import { isEmailValid } from "../../utility";



const EmailInput = ({ status, message, onValidated }) => {
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

  /*
    ** OnSubmit button click
  */
  const onSubmit = () => {
    const value = emailRef.current.value;
    if (isEmailValid(value)) {
        // fetch(`https://glamsapp.us17.list-manage.com/subscribe/post-json?u=ec26d1d3881b2e3a1cc0bb03d&amp;id=68e9549831&EMAIL=${value}&c=?`, {method: "GET"})
        onValidated({EMAIL: value});
    } else {
      setIsValidEmail(false);
    }
  };
  console.log(status, message);
  return (
    <>
    <div className="email-input-container">
      <div style={{display: "flex",flexDirection: "column"}}>
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
      <Button text={(status === "sending") ? "Sending.." : "Submit"} clickHandler={onSubmit} />
    </div>
      {(status === "success" && isValidEmail) && <p className="msg">Thank You for Subscribing!<span style={{color: "green"}}>&#9989;</span></p>}
      {(status === "error" && isValidEmail) && <p className="msg error">Email is already subscribed to Glams List. Please try with different email</p>}
    </>
  );
};

export default EmailInput;