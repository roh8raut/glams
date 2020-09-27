import React, {useState} from 'react';
// import './navbar.scss';
import Hamburger from '../hamburger/hamburger';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';


function Navbar() {
    const [showHamburger, setShowHamburger] = useState(false);
    const btnEle = React.useRef()
    const clickHandler = (e) => {
        btnEle.current.classList.toggle("active");
        btnEle.current.classList.toggle("not-active");
        setShowHamburger(!showHamburger);               
    }
    return (
        <div className="navbar">
            <span className="title"> <img src={logo} alt="Glams"/></span>
            <Hamburger clickHandler={clickHandler} btnEle={btnEle} />
            <div className={`navbar__links ${showHamburger ? "isOpen" : ""}`}>
                <span onClick={clickHandler}><Link to="/">Home</Link></span>
                <span onClick={clickHandler}><Link to="/about">About us</Link></span>
            </div>
        </div>
    )
}

export default Navbar;  