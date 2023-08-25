// Product Component: Product.jsx
import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from "../Helpers/FormatPrice.jsx";

export default function Product ({ id, name, image, price, category }) {
    return (
        <>
            <Link to={`/singleproduct/${id}`} style={{textDecoration: "none"}}>
                <div className="product-card">
                    <div className="img-card">
                        <p className="caption text-capitalize">{category}</p>
                        <img src={image} alt={name} />
                    </div>

                    <div className="card-data">
                        <div className="d-flex flex-row align-items-center justify-content-between name-price">
                            <h3 className="text-capitalize">{name}</h3>
                            <p>{<FormatPrice price={price} />}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};