// SingleProduct Component: SingleProduct.jsx
import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useProductContext } from '../Context/ProductContext.jsx';
import PageNavigation from './PageNavigation.jsx';
import Footer from "./Footer.jsx";
import MyImages from "./MyImages.jsx";
import FormatPrice from "../Helpers/FormatPrice.jsx";
import Stars from "./Stars.jsx"
import AddToCart from "./AddToCart.jsx"

// Media Imports:
import SingleProductLoading from "../Media/single-product-loading.mp4";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiWingedShield } from "react-icons/gi";

const api = "https://api.pujakaitem.com/api/products";

export default function SingleProduct() {

  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${api}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="d-flex align-items-center justify-content-center">
      <video
        src={SingleProductLoading}
        width="300px"
        loop muted autoPlay>
        loading...
      </video>
    </div>
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="single-product-page container my-5">
        <div className="row g-5">

          <div className="img-section-page col-lg-6 col-md-12 col-12">
            <MyImages
              imgs={image}
              id={alias} />
          </div>

          <div className="col-lg-6 col-md-12 col-12">
            <div className="single-product-data d-flex flex-column align-items-start justify-content-start">
              <h2 className="text-capitalize">{name}</h2>
              <Stars stars={stars} reviews={reviews} />
              <p className="product-data-price text-danger">
                MRP: <del> <FormatPrice price={price + 250000} /> </del>
              </p>
              <p className="product-real-price">
                Deal of the day: <FormatPrice price={price} />
              </p>
              <p className="product-description">{description}</p>

              <div className="product-warranty d-flex flex-row align-items-center justify-content-between w-100">
                <div className="res-war d-flex flex-row align-items-center justify-content-evenly">
                  <div className="warranty-data text-center">
                    <TbTruckDelivery className="warranty-img" />
                    <p>Free Delivery</p>
                  </div>
                  <div className="warranty-data text-center">
                    <TbReplace className="warranty-img" />
                    <p>30 Day Replacement</p>
                  </div>
                </div>
                <div className="res-war d-flex flex-row align-items-center justify-content-evenly">
                  <div className="warranty-data text-center">
                    <BsCashCoin className="warranty-img" />
                    <p>5% Cashback</p>
                  </div>
                  <div className="warranty-data text-center">
                    <GiWingedShield className="warranty-img" />
                    <p>2 Year Warranty</p>
                  </div>
                </div>
              </div>

              <div className="product-info">
                <p>
                  Available:
                  <span className="fw-bold">{stock > 0 ? " In Stock" : " Not Available"}</span>
                </p>
                <p>
                  ID: <span className="fw-bold">{alias}</span>
                </p>
                <p>
                  Brand: <span className="text-capitalize fw-bold">{company}</span>
                </p>
              </div>

              <hr className="w-100 line-sep" />

              {
                stock > 0 &&
                <AddToCart product={singleProduct} />
              }

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};