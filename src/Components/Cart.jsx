// Cart Component: Cart.jsx
import React from 'react';
import Footer from './Footer';
import { useCartContext } from '../Context/CartContext.jsx';
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';
import EmptyCart from "../Media/empty-cart.mp4";
import Bag from "../Media/bag.mp4";
import FormatPrice from '../Helpers/FormatPrice.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import PleaseLogin from "../Media/please-login.mp4";

export default function Cart() {

  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <>
      <div className="d-flex flex-column align-items-center justify-content-center my-5 no-cart">
        <video
          src={PleaseLogin}
          width="300px"
          loop muted autoPlay>
          please-login/mp4
        </video>
        <h5 className="my-4 text-dark-emphasis">Please Log-in to view cart.</h5>
        <button
          className="see-prod-btn"
          onClick={() => loginWithRedirect()}>Log In</button>
      </div>
      <Footer />
    </>;
  }

  return (
    <>
      <section className="cart-section">
        <div className="cart-body mb-5">
          <div class="container my-4">
            <h1 className="cart-title d-flex align-items-center">
              Cart
              <video
                width="60px"
                src={Bag}
                autoPlay muted loop>
                bag/mp4
              </video>
            </h1>
            {
              cart.length === 0
                ? <>
                  <div className="d-flex flex-column align-items-center justify-content-center empty-cart-log">
                    <video
                      width="300px"
                      src={EmptyCart}
                      autoPlay muted loop>
                      empty-cart/mp4
                    </video>
                    <h2 className="text-dark-emphasis">Cart is Empty</h2>
                    <p style={{ fontFamily: "'Rajdhani', sans-serif" }}
                      className="text-dark-emphasis">Take a look at the products where you can add them to the cart.</p>
                    <Link to="/products">
                      <button className="see-prod-btn">See Products</button>
                    </Link>
                  </div>
                </>
                : <>
                  <div className="d-flex flex-column align-items-start justify-content-center w-100">
                    <hr className="w-100" />
                    <div className="d-flex align-items-center">
                      <p className="me-2 text-dark-emphasis">Sub-total:</p>
                      <p className="fw-semibold text-dark-emphasis"><FormatPrice price={total_price} /></p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="me-2 text-dark-emphasis">Shipping Fees:</p>
                      <p className="fw-semibold text-dark-emphasis"><FormatPrice price={shipping_fee} /></p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="me-2 text-dark-emphasis">Overall:</p>
                      <p style={{ color: "#6c10ff" }}
                        className="fw-semibold"><FormatPrice price={total_price + shipping_fee} /></p>
                    </div>
                    <Link to="/order">
                    <button className="buy-btn">Proceed to buy</button>
                    </Link>
                    <hr className="w-100" />
                  </div>
                  <button
                    className="clear-btn"
                    onClick={clearCart}>Clear Cart</button>
                  <div class="cart-table">
                    {
                      cart.map((elem) => <CartItem key={elem.id} {...elem} />)
                    }
                  </div>
                  <Link to="/products">
                    <button className="continue-shop">Continue Shopping</button>
                  </Link>
                </>
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};