import React from 'react'
// import './videocare.scss';
// const x = require('../../assets/one.mp4');

const Videocard = ({ src, poster, width, height }) => {

    return (
        // <div>
        <video width={width} height={height} autoPlay loop muted poster={poster} >
            <source src={src} type="video/mp4" />
        </video>
        // </div>
    )
}

export default Videocard;
