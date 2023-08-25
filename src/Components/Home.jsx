// Home Component: Home.jsx
import React, { useState, useEffect } from 'react';

// Import the carousel styles:
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// Importing Components:
import ProHero from "./ProHero.jsx";
import Services from "./Services.jsx";
import Trusted from "./Trusted.jsx";
import FeatureProducts from "./FeatureProducts.jsx";

// Media:
import Carousel1 from "../Media/carousel-01.jpg";
import Carousel2 from "../Media/carousel-02.jpg";
import Carousel3 from "../Media/carousel-03.jpg";
import Carousel4 from "../Media/carousel-04.jpg";
import Carousel5 from "../Media/carousel-05.jpg";
import Carousel6 from "../Media/carousel-06.jpg";
import Carousel7 from "../Media/carousel-07.jpg";
import Carousel8 from "../Media/carousel-08.jpg";
import Carousel9 from "../Media/carousel-09.jpg";
import HeroVideo from "../Media/hero-video.mp4";
import { Link } from 'react-router-dom';

const images = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
  Carousel7,
  Carousel8,
  Carousel9,
];

export default function Home () {

  const [curInd, setCurInd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurInd((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Carousel
        className='carousel-section'
        selectedItem={curInd}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
      >
        {
          images.map((elem, index) => (
            <div key={index}>
              <img
                className='carousel-img'
                src={elem}
                alt={`img/ ${index + 1}`} />
            </div>
          ))
        }
      </Carousel>

      {/* Hero Section: */}
      <section className="hero-section pt-5">
        <div className="container">
          <div className="row">

            <div className="hero-content text-start col-lg-6 col-md-12 col-12 d-flex flex-column align-items-center justify-content-center">
              <div className="w-75">
                <h5 className="welcome text-dark-emphasis">Welcome to</h5>
                <h1 className="hero-brand">ShoGen</h1>
                <p className="">Welcome to our online shopping haven! Embark on a journey through a thoughtfully curated array of top-notch products, meticulously chosen to fulfill your diverse needs. Whether your heart desires fashion-forward finds or the latest gadgets, our collection has you covered. Unveil a world of seamless shopping today and relish an unparalleled digital retail escapade.</p>
                <Link to="/products">
                  <button className="hero-btn rounded-3">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="hero-video col-lg-6 col-md-12 col-12 d-flex align-items-center justify-content-center">
              <video
                width="400px"
                src={HeroVideo}
                loop muted autoPlay>hero-video/mp4</video>
            </div>

          </div>
        </div>

        <ProHero />
        <FeatureProducts />
        <Services />
        <Trusted />
      </section>
    </>
  );
};