import React from 'react'
import Videocard from '../videocard/videocard';
// import './landing.scss';
import data from '../../assets/stub';
import Footer from '../footer/footer';


const Landing = () => {

    return (
        <>
            <div className="landing">
                <div className="landing__text">Share With The World</div>
                <h5 className="small__text">Real Local Videos. Great Global Friends</h5>
                <div>
                    {
                        data.videos.map((videoObj, i) => videoObj.page === "landing" && <Videocard key={i} src={videoObj.url} poster={videoObj.poster} width="250" height="348" />)
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Landing;
