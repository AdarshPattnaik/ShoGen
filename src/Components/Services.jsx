// Services Component: Services.jsx
import React from 'react'

// Importing Media:
import FastDelivery from "../Media/fast-delivery.mp4";
import Protection from "../Media/protection.mp4";
import MoneyBack from "../Media/money-back.mp4";
import SecurePayment from "../Media/secure-payment.mp4";

export default function Services() {
    return (
        <>
            <div className="container-fluid service-section">
                <h2 className="text-center mt-5 text-dark-emphasis">Our Services</h2>
                <div className="row">

                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                        <div className="service-card d-flex flex-column align-items-center justify-content-center">
                            <video
                                src={FastDelivery}
                                width="200px"
                                loop muted autoPlay>
                                fast-delivery/mp4
                            </video>
                            <p className="fw-bold text-center text-dark-emphasis">
                                Super Fast and Free Delivery
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                        <div className="service-card d-flex flex-column align-items-center justify-content-center">
                            <video
                                src={Protection}
                                width="200px"
                                loop muted autoPlay>
                                protection/mp4
                            </video>
                            <p className="fw-bold text-center text-dark-emphasis">
                                Non-Contact Shipping
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                        <div className="service-card d-flex flex-column align-items-center justify-content-center">
                            <video
                                src={MoneyBack}
                                width="200px"
                                loop muted autoPlay>
                                money-back/mp4
                            </video>
                            <p className="fw-bold text-center text-dark-emphasis">
                                Money-Back Guaranteed
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center justify-content-center">
                        <div className="service-card d-flex flex-column align-items-center justify-content-center">
                            <video
                                src={SecurePayment}
                                width="200px"
                                loop muted autoPlay>
                                secure-payment/mp4
                            </video>
                            <p className="fw-bold text-center text-dark-emphasis">
                                Super Secure Payment System
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};