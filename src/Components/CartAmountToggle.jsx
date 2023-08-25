// CartAmountToggle Component: CartAmountToggle.jsx
import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartAmountToggle ({ amount, setDecrease, setIncrease }) {
  return (
    <>
      <div className="amount-toggle d-flex align-items-center">
        <button
          onClick={() => setDecrease()}
          className="minus">
          <FaMinus />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => setIncrease()}
          className="plus">
          <FaPlus />
        </button>
      </div>
    </>
  );
};