import React from "react";
import Videocard from "../videocard/videocard";
// import './landing.scss';
import data from "../../assets/stub";
import Footer from "../footer/footer";

const Landing = () => {
  return (
    <div>
      <div className="landing">
        <div className="landing__text">Share With The World</div>
        <h5 className="small__text">Real Local Videos. Great Global Friends</h5>
        <div>
          {data.videos.map((videoObj, i) => (
            <Videocard key={i} src={videoObj.url} width="250" height="355" />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
