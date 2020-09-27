import React from 'react'
// import '../../App.scss';

const Button = ({text, clickHandler}) => {
    return (
       <button className="btn" onClick={clickHandler}>{text}</button>
    )
}

export default Button;
