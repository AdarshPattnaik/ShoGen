// Sort Component: Sort.jsx
import React from 'react';
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { useFilterContext } from "../Context/FilterContext.jsx";

export default function Sort() {

  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();

  return (
    <>
      <div className="sort-header d-flex flex-row align-items-center justify-content-between mt-5 px-lg-5">
        <div className="view-toggle-icons d-flex align-items-center justify-content-between">
          <button
            onClick={setGridView}
            className={`view-btn d-flex align-items-center justify-content-center ${grid_view ? "active-view" : ""}`}>
            <BsFillGridFill className="sort-icon" />
          </button>
          <button
            onClick={setListView}
            className={`view-btn d-flex align-items-center justify-content-center ${!grid_view ? "active-view" : ""}`}>
            <FaListUl className="sort-icon" />
          </button>
        </div>
        <div className="sort-panel">
          <div className="total-products text-dark-emphasis fw-bold">
            {`${filter_products.length} Products Available`}
          </div>
          <div className="filter-items">
            <form action="#">
              <label htmlFor='sort'></label>
              <select
                onChange={sorting}
                className="select-sort"
                name="sort"
                id="sort">
                <option value={null} disabled selected>Sort by: Choose</option>
                <option value="lowest">Price(lowest)</option>
                <option value="highest">Price(highest)</option>
                <option value="a-z">Sort(a-z)</option>
                <option value="z-a">Sort(z-a)</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};