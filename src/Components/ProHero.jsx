import React from 'react'

// React Router Dom Imports:
import { Link } from "react-router-dom";

// Media Imports:
import VivoPhone from "../Media/vivo-phone.png";
import MacBookAir from "../Media/MacBookAir.png";
import AirPods from "../Media/AirPods.png";
import Headphone from "../Media/Headphone.png";
import Cosmetics from "../Media/cosmetics.png";
import VanityBag from "../Media/vanity-bag.png";
import Shoes from "../Media/shoes.png";
import Clothes from "../Media/clothes.png";
import Books from "../Media/books.png";
import Mouse from "../Media/mouse.png";
import Kitchen from "../Media/kitchen.png";
import Watch from "../Media/watch.png";

export default function ProHero () {
    return (
        <>
            <h2 className="text-white text-center bg-purple ps-5 mt-5 mb-0 pt-4">Upcoming Deals</h2>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="w-100 d-flex align-items-center justify-content-evenly">

                            <Link>
                                <img src={VivoPhone} className="pro-img" alt="VivoPhone" />
                            </Link>
                            <Link>
                                <img src={MacBookAir} className="pro-img" alt="MacBookAir" />
                            </Link>
                            <Link>
                                <img src={AirPods} className="pro-img" alt="AirPods" />
                            </Link>
                            <Link>
                                <img src={Headphone} className="pro-img" alt="Headphone" />
                            </Link>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w-100 d-flex align-items-center justify-content-evenly">

                            <Link>
                                <img src={Cosmetics} className="pro-img" alt="Cosmetics" />
                            </Link>
                            <Link>
                                <img src={VanityBag} className="pro-img" alt="VanityBag" />
                            </Link>
                            <Link>
                                <img src={Shoes} className="pro-img" alt="Shoes" />
                            </Link>
                            <Link>
                                <img src={Clothes} className="pro-img" alt="Clothes" />
                            </Link>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w-100 d-flex align-items-center justify-content-evenly">

                            <Link>
                                <img src={Books} className="pro-img" alt="Books" />
                            </Link>
                            <Link>
                                <img src={Mouse} className="pro-img" alt="Mouse" />
                            </Link>
                            <Link>
                                <img src={Kitchen} className="pro-img" alt="Kitchen" />
                            </Link>
                            <Link>
                                <img src={Watch} className="pro-img" alt="Watch" />
                            </Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};