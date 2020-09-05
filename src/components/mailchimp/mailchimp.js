import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailInput from '../email/emailInput';

class Mailchimp extends Component {
  render() {
    // const url = "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e";
    const url =  `https://glamsapp.us17.list-manage.com/subscribe/post?u=ec26d1d3881b2e3a1cc0bb03d&amp;id=68e9549831`;
    return (
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <EmailInput
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
    );
  }
}

export default Mailchimp;
