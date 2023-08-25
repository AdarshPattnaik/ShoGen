// ProductList Component: ProductList.jsx
import React from 'react';
import { useFilterContext } from '../Context/FilterContext.jsx';
import GridView from "./GridView.jsx";
import ListView from "./ListView.jsx";

export default function ProductList () {

  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView product={filter_products} />
  }

  if (grid_view === false) {
    return <ListView product={filter_products} />
  }
};