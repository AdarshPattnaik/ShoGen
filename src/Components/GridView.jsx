// GridView Component: GridView.jsx
import React from 'react'
import Product from "./Product.jsx";

export default function GridView({ product }) {
    // console.log(products);
    return (
        <>
            <div className="container">
                <div className="row">
                    {product.map((elem) => {
                        return <div key={elem.id} className="col-lg-4 col-md-4 col-4">
                            <Product {...elem} />
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};