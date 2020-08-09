import React from 'react'
// import './videocare.scss';
// const x = require('../../assets/one.mp4');

const Videocard = ({src, poster, width, height}) => {
   
    return (
            <video width={width} height={height} poster={poster || "https://images.pexels.com/photos/3400130/pexels-photo-3400130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} autoPlay loop muted> 
                <source src={src} type="video/mp4" />
            </video>
    )
}

export default Videocard;
