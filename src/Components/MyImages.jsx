// MyImages Component: MyImages.jsx
import React, { useState } from 'react';

export default function MyImages({ imgs = [{ url: "" }] }) {

    const [mainImg, setMainImg] = useState(imgs[0]);

    return (
        <>
            <div className="my-images container-fluid">
                <div className="row">
                    <div className="order-lg-0 order-md-1 order-1 col-lg-4 col-md-12 col-12 show-my-image">
                        {
                            imgs.map((elem, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            src={elem.url}
                                            alt={elem.filename}
                                            onClick={() => setMainImg(imgs[index])} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="order-lg-1 order-md-0 order-0 col-lg-8 col-md-12 col-12 main-my-image">
                        <img src={mainImg.url} alt={mainImg.filename} />
                    </div>
                </div>
            </div>
        </>
    );
};