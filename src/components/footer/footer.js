import React from 'react'
import EmailInput from '../email/emailInput'
// import './footer.scss';
// import terms from '../../assets/Glams_Terms.pdf';
// import privacy from '../../assets/Glams_Privacy_Policy.pdf';
import Mailchimp from '../mailchimp/mailchimp';


const Footer = () => {
    const terms = `https://www.termsfeed.com/live/21f8697f-b023-4730-8a43-503b068bfb3d`;
    const privacyPolicies = `https://www.termsfeed.com/live/f8a93501-1432-4275-9751-66ae8562bb21`;
    
    return (
        <div className="footer-container">
            <div className="footer-email-container">
                <h6>Glams is coming! Be the first to get the app and share your videos with the world.</h6>
                <Mailchimp />
                <p className="footer-email-termsPolicy">
                    By Clicking on the Submit button, you confirm that you agree to our 
                    <a href={terms} rel="noopener noreferrer" target="_blank"> Terms</a> and 
                    <a href={privacyPolicies} rel="noopener noreferrer" target="_blank"> Policies</a>
                </p>
                <p className="footer__email">Contact Us - hello@getglams.com</p>
            </div> 
        </div>
    )
}

export default Footer;
