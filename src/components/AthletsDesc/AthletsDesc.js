import React from "react";
import "./AthletsDesc.css";
import UseWindowSize from '../../hook/UseWindowSize'
import Slider from "react-slick";
import Settings from '../../hook/CarouselSlick'

const AthletsDesc = () => {
  const [height, width] = UseWindowSize();
  if (width > 320) {
    return (
      <div className="Athlets_desc_container">
        <div className="connection_container">
          <div className="connection_content">
            <div className="connection_header">
              <span id="topic-number">01</span>
              <span id="topic">CONNECTION</span>
            </div>
            <div className="connection_body">
              <span>
                Connect with coaches directly, you can ping coaches to view
                profile.
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
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
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
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Athlets_desc_container">
        <Slider {...Settings}>
        <div className="connection_container">
          <div className="connection_content">
            <div className="connection_header">
              <span id="topic-number">01</span>
              <span id="topic">CONNECTION</span>
            </div>
            <div className="connection_body">
              <span>
                Connect with coaches directly, you can ping coaches to view
                profile.
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
                Work with other student athletes to increase visability. When
                you share and like other players videos it will increase your
                visability as a player. This is the team work aspect to Surface
                1.
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
                Resources and tools for you to get better as a student Athelte.
                Access to training classes, tutor sessions, etc
              </span>
            </div>
          </div>
        </div>
        </Slider>
      </div>
    );
  }
};

export default AthletsDesc;
