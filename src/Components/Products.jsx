// Products Component: Products.jsx
import React from 'react'
import Footer from './Footer.jsx';
import FilterSection from "./FilterSection.jsx";
import Sort from "./Sort.jsx";
import ProductList from "./ProductList.jsx";

export default function Products() {


  return (
    <>
      <section className="product-section mb-5">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-12 col-md-12 col-12">
              <div className="sort-filter">
                <Sort />
              </div>
              <div className="main-product">
                <ProductList />
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};