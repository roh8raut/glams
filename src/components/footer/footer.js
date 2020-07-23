import React from 'react'
import EmailInput from '../email/emailInput'
// import './footer.scss';
import terms from '../../assets/Glams_Terms.pdf';
import privacy from '../../assets/Glams_Privacy_Policy.pdf';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-email-containter">
                <h6>Glams is coming! Be the first to get the app and share your videos with the world.</h6>
                <EmailInput />
                <p className="footer-email-termsPolicy">
                    By Clicking on the Submit button, you confirm that you agree to our 
                    <a href={terms} rel="noopener noreferrer" target="_blank"> Terms</a> and 
                    <a href={privacy} rel="noopener noreferrer" target="_blank"> Policies</a>
                </p>
            </div> 
        </div>
    )
}

export default Footer;
