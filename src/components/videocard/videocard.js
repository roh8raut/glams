import React from 'react'
// import './videocare.scss';
// const x = require('../../assets/one.mp4');

const Videocard = ({src, width, height}) => {
   
    return (
            <video width={width} height={height} poster="https://www.onelargeprawn.co.za/wp-content/uploads/2012/12/Hexagonall_classic_games_01.jpg" autoPlay loop muted> 
                <source src={src} type="video/mp4" />
            </video>
    )
}

export default Videocard;
