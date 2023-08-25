// AddToCart Component: AddToCart.jsx
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle.jsx";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext.jsx';
import { useAuth0 } from "@auth0/auth0-react";

export default function AddToCart({ product }) {

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const { addToCart } = useCartContext();

    const { isAuthenticated } = useAuth0();

    const setDecrease = () => {
        amount > 1
            ? setAmount(amount - 1)
            : setAmount(1);
    };

    const setIncrease = () => {
        amount < stock
            ? setAmount(amount + 1)
            : setAmount(stock);
    };

    return (
        <>
            <div className="add-to-option">
                <p className="d-flex flex-row align-items-center">
                    Colors:
                    {
                        colors.map((curColor, ind) => {
                            return (
                                <button
                                    className={color === curColor ? "btn-color btn-color-active" : "btn-color"}
                                    style={{
                                        backgroundColor: curColor,
                                        height: "30px",
                                        width: "30px",
                                        borderRadius: "50%"
                                    }}
                                    key={ind}
                                    onClick={() => setColor(curColor)}>
                                    {color === curColor ? <FaCheck style={{ color: "grey" }} /> : <></>}
                                </button>
                            )
                        })
                    }
                </p>
            </div>

            <div className="add-cart-toggle">
                <CartAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease} />
            </div>

            {
                isAuthenticated
                    ? <Link to="/cart"
                        onClick={() => addToCart(id, color, amount, product)}>
                        <button className="add-to-cart-btn">ADD TO CART</button>
                    </Link>
                    : <div className="d-flex flex-column align-items-start">
                        <button
                            style={{opacity: "0.7"}}
                            className="add-to-cart-btn">ADD TO CART</button>
                        <p className="text-danger mt-3">⚠ Login to add this item in your cart.</p>
                    </div>
            }
        </>
    );
};