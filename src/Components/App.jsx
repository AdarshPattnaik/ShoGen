// App Component: App.jsx
import React from 'react';

// Importing React Router:
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Importing Components:
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Contact from "./Contact.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Cart from "./Cart.jsx";
import Error from "./Error.jsx";
import Header from "./Header.jsx";
import Order from "./Order.jsx";

export default function App() {
    return (
        <BrowserRouter>

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order" element={<Order />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>
    );
};