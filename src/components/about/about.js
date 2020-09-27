import React from 'react'
import data from '../../assets/stub';
import Videocard from '../videocard/videocard';
import './about.scss';
import Footer from '../footer/footer';

const About = () => {
    return (
        <>
            <div className="aboutus container">
                <div className="aboutus__videos">
                    {
                        data.videos.map((videoObj, i) => videoObj.page === "about" && <Videocard key={i} src={videoObj.url} poster={videoObj.poster} width="250" height="420" />)
                    }
                </div>
                <div className="aboutus__text container">
                    <div>
                        <h1>Our Mission</h1>
                        <p>Glams is a creative community that creates inspiring content using short-form mobile videos.</p>
                        <p>Our mission is to connect the world with the video content created by amateurs, influencers, and celebrities.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;
