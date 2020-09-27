import React from 'react';
// import './hamburger.scss';

const Hamburger = (props) => {

    return (
        <div className="hamburger not-active" ref={props.btnEle} onClick={props.clickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;