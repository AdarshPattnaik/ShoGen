// Error Component: Error.jsx
import React from 'react';

// Media Imports:
import Error404 from "../Media/error404.mp4";

// Importing Component:
import Footer from "./Footer.jsx";
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <>
        <section className='error-section'>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <video
              width="400px"
              src={Error404}
              loop muted autoPlay>
              error404/mp4
            </video>
          </div>
          <h2 className="error-head text-center">The page you are looking for doesn't exist. Your can the button below to get back to the homepage.</h2>
          <div className="d-flex align-items-center justify-content-center my-5">
            <Link to="/">
              <button className="submit-btn">
                Home
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    </>
  );
};