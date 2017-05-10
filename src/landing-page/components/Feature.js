import React, { Component } from 'react';
import Title from '../../common/title';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
import './Feature.css';
import slider1 from '../../static/image-slider1.png'
import slider2 from '../../static/image-slider2.png'
import slider3 from '../../static/image-slider3.png'

class Feature extends Component {
  render() {
    return (
      <div className="feature">
        <div className="slider">
          <Carousel
            showThumbs={false} dynamicHeight emulateTouch>
            <div>
                <img src={slider1} alt="feature1"/>
            </div>
            <div>
                <img src={slider2}  alt="feature2"/>
            </div>
            <div>
                <img src={slider3}  alt="feature3"/>
            </div>
          </Carousel>
        </div>
        <Title title="Project Name" />
        <div className="sub-title">
          Service Offering for Client Name
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, causae maluisset reformidans an eum,
          blandit reprehendunt at eos, cum ea nullam nostro aliquando. Id
          veri facer tacimates ius, vis ullum dicunt volumus in, his ad errem
          ocurreret.
        </div>
        <div className="action">
          <button>Visit Site</button>
        </div>
      </div>
    );
  }
}

export default Feature;
