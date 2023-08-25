import React from 'react'
import FormatPrice from '../Helpers/FormatPrice.jsx';
import { Link } from 'react-router-dom';

export default function ListView({ product }) {
    return (
        <>
            <div className="list-view my-5">
                {
                    product.map((elem) => {
                        const { id, name, image, price, description } = elem;
                        return (
                            <div key={id} className="row my-5">
                                <div className="col-lg-4 col-md-4 col-4 d-flex align-items-center justify-content-center">
                                    <Link to={`/singleproduct/${id}`}>
                                        <img
                                            className="hover-dark"
                                            width="250px"
                                            src={image}
                                            alt={name} />
                                    </Link>
                                </div>
                                <div className="res-list col-lg-8 col-md-8 col-8 text-start text-dark-emphasis">
                                    <h3 className="text-capitalize">{name}</h3>
                                    <p>{description.slice(0, 101)}...</p>
                                    <p className="text-danger fw-bold">{<FormatPrice price={price} />}</p>
                                    <Link to={`/singleproduct/${id}`}>
                                        <button className="more-btn">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};