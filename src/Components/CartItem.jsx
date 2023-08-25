// CartItem Component: CartItem.jsx
import React from 'react';
import FormatPrice from "../Helpers/FormatPrice.jsx";
import { MdOutlineDelete } from "react-icons/md";
import CartAmountToggle from './CartAmountToggle.jsx';
import { useCartContext } from '../Context/CartContext.jsx';

export default function CartItem({
    id, name,
    image, color,
    price, amount }) {

    const { removeItem, setIncrease, setDecrease } = useCartContext();

    return (
        <>
            <div class="row cart-row">
                <div class="col-xs-12 col-md-2 d-flex align-items-center justify-content-center">
                    <img src={image} alt={id} width="100%" />
                </div>
                <div class="col-md-6 d-flex flex-column align-items-start justify-content-between">
                    <h3 class="product-name text-dark-emphasis text-capitalize">{name}</h3>
                    <p class="product-price text-dark-emphasis mb-0"><FormatPrice price={price} /></p>
                    <div class="product-options d-flex align-items-center text-dark-emphasis">
                        Color:
                        <div
                            className="ms-1"
                            style={{
                                backgroundColor: color,
                                height: "15px", width: "15px",
                                borderRadius: "50%"
                            }}></div></div>
                    <div class="product-price">
                        <div className="quantity-regulator d-flex align-items-center">
                            <CartAmountToggle
                                amount={amount}
                                setDecrease={() => setDecrease(id)}
                                setIncrease={() => setIncrease(id)} />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 cart-actions">
                    <div class="product-price-total"><FormatPrice price={price*amount} /></div>
                    <div class="product-delete">
                        <button
                            onClick={() => removeItem(id)}
                            className="remove-cart-btn">
                            <MdOutlineDelete />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};