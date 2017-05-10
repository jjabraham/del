import React, { Component } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Title from '../common/title';
import Feature from './components/Feature';
import Breakout from './components/Breakout';
import ImageBlock from './components/ImageBlock';
import './style.css';
import imageLarge from '../static/image-large.png';
import imageSmall from '../static/image-small.png';
import imageSmall2 from '../static/image-small2.png';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Header />
        <Feature />
        <ImageBlock images={[imageLarge]}/>
        <ImageBlock images={[imageSmall, imageSmall2]}/>
        <Breakout />
        <Title title="More Layouts" />
        <ImageBlock images={[imageLarge]}/>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
