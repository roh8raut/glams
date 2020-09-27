import React from 'react'
import EmailInput from '../email/emailInput'
// import './footer.scss';
import MailChimp from '../mailchimp/mailchimp';



const Footer = () => {
    const terms = `https://www.termsfeed.com/live/21f8697f-b023-4730-8a43-503b068bfb3d`;
    const privacy = `https://www.termsfeed.com/live/f8a93501-1432-4275-9751-66ae8562bb21`;
    return (
        <div className="footer-container">
            <div className="footer-email-containter">
                <h6>Share With The World. Real Local Videos. Great Global Friends.</h6>
                <MailChimp />
                <p className="footer-email-termsPolicy">
                    By Clicking on the send button, you confirm that u agree to our
                    <a href={terms} rel="noopener noreferrer" target="_blank"> Terms</a> and
                    <a href={privacy} rel="noopener noreferrer" target="_blank"> Policies</a>
                </p>
                <p className="footer__email">Contact Us - hello@getglams.com</p>
            </div>
        </div>
    )
}

export default Footer;
