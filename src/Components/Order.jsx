// Order Component: Order.jsx
import React from 'react';
import Footer from "./Footer.jsx";
import OrderPay from "../Media/payment-order.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import PaySuccess from "../Media/pay-success.mp4";

export default function Order() {
    const [users, setUsers] = React.useState();
    const getUserData = (e) => {
        setUsers({...users, [e.target.name]: e.target.value});
    };
    return (
        <>
            <section className="gradient-custom">
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-md-7 col-lg-5 col-xl-4">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-4">
                                    <form>
                                        <div className="d-flex justify-content-center align-items-center mb-4">
                                            <img width="40px" src={OrderPay} alt="order" />
                                            <h4 className="d-flex align-items-center text-dark-emphasis ms-2 mt-2">Place Order</h4>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline w-100">
                                                <input
                                                    required
                                                    name="Address"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline w-100">
                                                <input
                                                    required
                                                    name="City"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="City" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline w-100">
                                                <input
                                                    required
                                                    name="State"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="State" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline w-100">
                                                <input
                                                    required
                                                    name="Country"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="Country" />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="form-outline">
                                                <input
                                                    required
                                                    name="CardNumber"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="Card Number" />
                                            </div>
                                            <img
                                                src="https://img.icons8.com/color/48/000000/visa.png"
                                                alt="visa"
                                                width="64px" />
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline w-100">
                                                <input
                                                    required
                                                    name="CardholderName"
                                                    onChange={getUserData}
                                                    type="text"
                                                    className="form-control"
                                                    id="floatingInput"
                                                    placeholder="Cardholder's Name" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center pb-2">
                                            <div className="form-outline">
                                                <input
                                                    required
                                                    name="ExpireDate"
                                                    onChange={getUserData}
                                                    type="text"
                                                    id="typeExp exp"
                                                    className="form-control form-control-lg"
                                                    placeholder="MM/YYYY"
                                                    size="7"
                                                    minLength="7"
                                                    maxLength="7" />
                                            </div>
                                            <div className="form-outline">
                                                <input
                                                    required
                                                    name="Password"
                                                    onChange={getUserData}
                                                    type="password"
                                                    id="typeText2"
                                                    className="form-control form-control-lg"
                                                    placeholder="CVV"
                                                    size="1"
                                                    minLength="3"
                                                    maxLength="3" />
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                        {
                                            users
                                            ? <button
                                                type="button"
                                                className="btn btn-info btn-lg btn-rounded text-white mx-auto"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">
                                                <AiOutlineArrowRight />
                                            </button>
                                            :<button
                                                type="button"
                                                className="btn btn-info btn-lg btn-rounded text-white mx-auto">
                                                <AiOutlineArrowRight />
                                            </button>
                                        }
                                        </div>
                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <div className="modal-title fs-5" id="exampleModalLabel"></div>
                                                        <Link to="/cart">
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </Link>
                                                    </div>
                                                    <div className="modal-body d-flex flex-column align-items-center justify-content-center">
                                                        <video
                                                            src={PaySuccess}
                                                            width="150px"
                                                            loop muted autoPlay>
                                                            pay-success/mp4
                                                        </video>
                                                        <h5 className="text-success">Payment Successful</h5>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <Link to="/cart">
                                                            <button data-bs-dismiss="modal" type="button" className="btn btn-primary">Done</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};