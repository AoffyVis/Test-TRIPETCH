import React from "react";
import "./PlayerDesc.css";
import UseWindowSize from '../../hook/UseWindowSize'
import Slider from "react-slick";
import Settings from '../../hook/CarouselSlick'

const PlayerDesc = () => {
  const [height, width] = UseWindowSize();
  if (width > 320) {
    return (
      <div className="Player_desc_container">
        <div className="connection_container">
          <div className="connection_content">
            <div className="connection_header">
              <span id="topic-number">01</span>
              <span id="topic">CONNECTION</span>
            </div>
            <div className="connection_body">
              <span>
                Connect with talented athlete directly, you can watch their
                skills through video showreels directly from Surface 1.
              </span>
            </div>
          </div>
        </div>
        <div className="collab_container">
          <div className="collab_content">
            <div className="collab_header">
              <span id="topic-number">02</span>
              <span id="topic">COLLABORATION</span>
            </div>
            <div className="collab_body">
              <span>
                Work with recruiter to increase your chances of finding talented
                athlete.
              </span>
            </div>
          </div>
        </div>
        <div className="growth_container">
          <div className="growth_content">
            <div className="growth_header">
              <span id="last-topic-number">03</span>
              <span id="topic">GROWTH</span>
            </div>
            <div className="growth_body">
              <span>Save your time, recruit proper athlets for your team.</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Player_desc_container">
        <Slider {...Settings}>
          <div className="connection_container">
            <div className="connection_content">
              <div className="connection_header">
                <span id="topic-number">01</span>
                <span id="topic">CONNECTION</span>
              </div>
              <div className="connection_body">
                <span>
                  Connect with talented athlete directly, you can watch their
                  skills through video showreels directly from Surface 1.
                </span>
              </div>
            </div>
          </div>
          <div className="collab_container">
            <div className="collab_content">
              <div className="collab_header">
                <span id="topic-number">02</span>
                <span id="topic">COLLABORATION</span>
              </div>
              <div className="collab_body">
                <span>
                  Work with recruiter to increase your chances of finding
                  talented athlete.
                </span>
              </div>
            </div>
          </div>
          <div className="growth_container">
            <div className="growth_content">
              <div className="growth_header">
                <span id="last-topic-number">03</span>
                <span id="topic">GROWTH</span>
              </div>
              <div className="growth_body">
                <span>
                  Save your time, recruit proper athlets for your team.
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
};

export default PlayerDesc;
