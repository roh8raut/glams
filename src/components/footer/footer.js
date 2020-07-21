import React from 'react'
import EmailInput from '../email/emailInput'
// import './footer.scss';
import terms from '../../assets/Glams_Terms.pdf';
import privacy from '../../assets/Glams_Privacy_Policy.pdf';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-email-containter">
                <h6>Share With The World. Real Local Videos. Great Global Friends.</h6>
                <EmailInput />
                <p className="footer-email-termsPolicy">
                    By Clicking on the send button, you confirm that u agree to our 
                    <a href={terms} rel="noopener noreferrer" target="_blank"> Terms</a> and 
                    <a href={privacy} rel="noopener noreferrer" target="_blank"> Policies</a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
