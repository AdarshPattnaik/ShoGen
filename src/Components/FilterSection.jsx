import React from 'react'
import { Link } from 'react-router-dom';
import FormatPrice from "../Helpers/FormatPrice.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import UserDummy from "../Media/user-dummy.png";

export default function FilterSection({
  categoryOnlyData,
  companyOnlyData,
  colorsOnlyData,
  updateFilterValue,
  clearFilters,
  category,
  colors,
  price,
  maxPrice,
  minPrice }) {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <section className="filter-section">
        <button
          className="all-btn me-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop">
          ☰
        </button>

        <div
          className="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header">
            {
              isAuthenticated
                ? <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src={user.picture}
                    width="30px"
                    alt="user-dp" />
                  <h5 className="offcanvas-title text-white" id="staticBackdropLabel">{user.name.split(" ")[0]}</h5>
                </div>
                : <div className="d-flex align-items-center">
                  <img
                    style={{
                      filter: "invert(100%)"
                    }}
                    src={UserDummy}
                    width="30px"
                    alt="user-dummy" />
                  <h5 className="offcanvas-title text-white">Hello, user</h5>
                </div>
            }
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="filter-top d-flex flex-row align-items-center justify-content-between">
              <h1 className="text-dark-emphasis filter-h1">Filter</h1>
              <button
                onClick={clearFilters}
                className="reset-btn"
                data-bs-dismiss="offcanvas">RESET</button>
            </div>
            <div className="sidebar-category d-flex flex-column align-items-start">
              <h3>Category</h3>
              {
                categoryOnlyData.map((elem, ind) => {
                  return (
                    <Link to="/products">
                      <button
                        className="sidebar-btn"
                        key={ind}
                        type="button"
                        name="category"
                        value={elem}
                        onClick={updateFilterValue}
                        data-bs-dismiss="offcanvas">
                        {elem}
                      </button>
                    </Link>
                  )
                })
              }
            </div>
            <div className="sidebar-category d-flex flex-column align-items-start mt-4">
              <h3>Brands</h3>
              {
                companyOnlyData.map((elem, ind) => {
                  return (
                    <Link to="/products">
                      <button
                        className="sidebar-btn"
                        key={ind}
                        type="button"
                        name="company"
                        value={elem}
                        onClick={updateFilterValue}
                        data-bs-dismiss="offcanvas">
                        {elem}
                      </button>
                    </Link>
                  )
                })
              }
            </div>
            <div className="sidebar-category d-flex flex-column align-items-start mt-4">
              <h3>Colors</h3>
              <div className="d-flex flex-row align-items-center justify-content-between w-100">
                {
                  colorsOnlyData.map((elem, ind) => {
                    if (elem === "all") {
                      return (
                        <Link to="/products">
                          <button
                            key={ind}
                            type="button"
                            name="colors"
                            className='rounded-circle sidebar-btn'
                            value={elem}
                            onClick={updateFilterValue}
                            data-bs-dismiss="offcanvas">
                            all
                          </button>
                        </Link>
                      );
                    }
                    return (
                      <Link to="/products">
                        <button
                          key={ind}
                          type="button"
                          name="colors"
                          className='rounded-circle'
                          value={elem}
                          onClick={updateFilterValue}
                          style={{
                            backgroundColor: elem,
                            color: "grey",
                            width: '20px', height: "20px",
                            border: "none", outline: "none"
                          }}
                          data-bs-dismiss="offcanvas">
                          {colors === elem ? "✓" : ""}
                        </button>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
            <div className="sidebar-category d-flex flex-column align-items-start mt-4 mb-5">
              <h3>Price</h3>
              <p className="price-num"><FormatPrice price={price} /></p>
              <input
                className="w-100"
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};