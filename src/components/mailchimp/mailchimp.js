import React from 'react'
import EmailInput from '../email/emailInput';
import MailchimpSubscribe from "react-mailchimp-subscribe"


const MailChimp = () => {
    const url = `https://glamsapp.us17.list-manage.com/subscribe/post?u=ec26d1d3881b2e3a1cc0bb03d&amp;id=68e9549831`;
    return <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <EmailInput
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
            />
        )}
    />
}

export default MailChimp
