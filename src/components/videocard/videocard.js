import React from 'react'
// import './videocare.scss';
// const x = require('../../assets/one.mp4');

const Videocard = ({src, width, height}) => {
   
    return (
        // <div>
            <video width={width} height={height} autoPlay loop muted>
                <source src={src} type="video/mp4" />
            </video>
        // </div>
    )
}

export default Videocard;
