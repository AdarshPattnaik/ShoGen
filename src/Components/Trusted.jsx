// Trusted Component: Trusted.jsx
import React from 'react';

// Media Imports:
import Razer from "../Media/razer.png";
import Nike from "../Media/nike.png";
import Gucci from "../Media/gucci.png";
import Puma from "../Media/puma.png";
import Mi from "../Media/mi.png";

// Importing Footer:
import Footer from "./Footer.jsx";

export default function Trusted () {
  return (
    <>
        <div className="container mb-5">
            <h2 className="trust-head text-center text-dark-emphasis mt-5 mb-3">Trusted by 1000+ Companies</h2>
            <div className="brands-trusted d-flex flex-row align-items-center justify-content-between">
                <img
                    width="150px"
                    src={Razer}
                    alt="razer.png" />
                <img
                    width="150px"
                    src={Nike}
                    alt="nike.png" />
                <img
                    width="150px"
                    src={Gucci}
                    alt="gucci.png" />
                <img
                    width="150px"
                    src={Puma}
                    alt="puma.png" />
                <img
                    width="150px"
                    src={Mi}
                    alt="mi.png" />
            </div>
        </div>
        <Footer />
    </>
  );
};