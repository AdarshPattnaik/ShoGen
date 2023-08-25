// FeatureProducts Component: FeatureProducts.jsx
import React from 'react';
import { useProductContext } from "../Context/ProductContext.jsx";

// Media Imports:
import FeatureLoading from "../Media/feature-loading.mp4";
import Product from './Product.jsx';

export default function FeatureProducts() {
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center">
            <video
                src={FeatureLoading}
                width="300px"
                loop muted autoPlay>
                loading...
            </video>
        </div>
    }

    return (
        <>
            <div className="container mt-5">
                <div className="feature-section">
                    <h4 className="check-head">CHECK OUR</h4>
                    <h2 className="text-dark-emphasis">Featured Items</h2>
                    <div className="fp d-flex flex-row align-items-center justify-content-between">
                        {
                            featureProducts.map((elem) => {
                                return <Product
                                    key={elem.id}
                                    {...elem} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};