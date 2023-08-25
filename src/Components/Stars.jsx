// Stars Component: Stars.jsx
import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function Stars ({stars, reviews}) {

    const ratingStar = Array.from({length: 5}, (elem, index) => {
        let num = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= index + 1
                    ? <BsStarFill />
                    : stars >= num
                    ? <BsStarHalf />
                    : <BsStar />
                }
            </span>
        );
    });

  return (
    <>
        <div className="d-flex flex-row align-items-center justify-content-between">
            <p className="star-rating">{ratingStar}</p>
            <p className="star-customer text-dark-emphasis mt-1 ms-2">({reviews} customer reviews)</p>
        </div>
    </>
  );
};