import React from 'react';
import './Breakout.css';
import breakoutImage from '../../static/breakout.png';

const Breakout = () => (
  <div className="breakout-area">
    <div className="breakout-content">
      <div className="breakout-title">
        Breakout Area
      </div>
      <div className="breakout-text">
        Lorem ipsum dolor sit amet, causae maluisset reformidans an eum,
        blandit reprehendunt at eos, cum ea nullam nostro aliquando.
        Id veri facer tacimates ius, vis ullum dicunt volumus in, his
        ad errem ocurreret. Aliquid laoreet evertitur ei pri.
      </div>
    </div>
    <div className="breakout-image">
      <img src={breakoutImage} alt="Breakout" />
    </div>
  </div>
)

export default Breakout;
