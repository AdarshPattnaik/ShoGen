import React from 'react'
import FilterSection from "./FilterSection.jsx";
import { useFilterContext } from '../Context/FilterContext.jsx';
import { Link } from 'react-router-dom';

export default function NavSecond() {

    const {
        filters: {
            text, category,
            colors, price,
            maxPrice, minPrice
        },
        all_products,
        updateFilterValue,
        clearFilters
    } = useFilterContext();

    const getUniqueData = (data, property) => {
        let newVal = data.map((elem) => elem[property]);

        // ---------- Modern Approach: ----------
        // if (property === "colors"){
        //     newVal = newVal.flat()
        // }
        // return newVal = ["all", ...new Set(newVal)];
        // --------------------------------------

        // ---------- Traditional Approach: ----------
        property === "colors"
            ? newVal = ["all", ...new Set([].concat(...newVal))]
            : newVal = ["all", ...new Set(newVal)];
        return newVal;
        // -------------------------------------------
    };

    const categoryOnlyData = getUniqueData(all_products, "category");
    const companyOnlyData = getUniqueData(all_products, "company");
    const colorsOnlyData = getUniqueData(all_products, "colors");

    return (
        <>
            <section className="d-flex align-items-center justify-content-between">
                <FilterSection
                    category={category}
                    colors={colors}
                    price={price}
                    maxPrice={maxPrice}
                    minPrice={minPrice}
                    updateFilterValue={updateFilterValue}
                    clearFilters={clearFilters}
                    categoryOnlyData={categoryOnlyData}
                    companyOnlyData={companyOnlyData}
                    colorsOnlyData={colorsOnlyData} />

                <div className="filter-search">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Link to="/products">
                            <input
                                type='text'
                                name="text"
                                className="search-input"
                                placeholder="Search..."
                                value={text}
                                onChange={updateFilterValue} />
                        </Link>
                    </form>
                </div>
            </section>
        </>
    );
};