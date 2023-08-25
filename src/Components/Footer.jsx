// Footer Component: Footer.jsx
import React from 'react';
import { Link } from "react-router-dom";

// Media Imports:
import Pin from "../Media/pin.png";

export default function Footer() {
  return (
    <>
      <footer className="nb-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="about">
                <h2 className="text-white foot-brand">Sho<span style={{ color: "rgb(0, 225, 255)" }}>Gen</span></h2>
                <p>Thank you for choosing ShoGen for all your needs. We take pride in offering you a curated collection of the latest trends and timeless classics, all designed to elevate your style and comfort. Our commitment to quality craftsmanship and exceptional customer service ensures that every step you take is a confident one. Explore our range, find your perfect pair, and step into a world where technology meets function. ShoGen - Where Every Step Tells a Story.</p>

                <div className="social-media">
                  <ul className="list-inline">
                    <li>
                      <Link
                        to="https://www.facebook.com/adarsh.pattanaik.92"
                        title="">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://github.com/AdarshPattnaik"
                        title="">
                        <i className="fa fa-github"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/_ig_adarsh__/"
                        title="">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/adarsh-pattnaik-41319026b/"
                        title="">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Help Center</h2>
                <ul className="list-unstyled">
                  <li><a href="https://www.hostgator.com/blog/online-payment-methods-ecommerce/" title=""><i className="fa fa-angle-double-right"></i> How to Pay</a></li>
                  <li><a href="https://blog.storeya.com/2019/06/ecommerce-faq/" title=""><i className="fa fa-angle-double-right"></i> FAQ's</a></li>
                  <li><a href="https://www.mapsofindia.com/maps/orissa/rourkela.html" title=""><i className="fa fa-angle-double-right"></i> Sitemap</a></li>
                  <li><a href="https://www.termsfeed.com/blog/sample-shipping-policy-template/" title=""><i className="fa fa-angle-double-right"></i> Delivery Info</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Customer information</h2>
                <ul className="list-unstyled">
                  <li><Link to="/products" title=""><i className="fa fa-angle-double-right"></i> Products</Link></li>
                  <li><a href="https://blog.storeya.com/2019/06/ecommerce-faq/" title=""><i className="fa fa-angle-double-right"></i> FAQ's</a></li>
                  <li><a href="https://www.gobankingrates.com/money/making-money/how-to-sell-stuff-online/" title=""><i className="fa fa-angle-double-right"></i> Sell Your Items</a></li>
                  <li><Link to="/contact" title=""><i className="fa fa-angle-double-right"></i> Contact Us</Link></li>
                  <li><a href="https://rss.com/" title=""><i className="fa fa-angle-double-right"></i> RSS</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Security & privacy</h2>
                <ul className="list-unstyled">
                  <li><a href="https://termly.io/resources/templates/terms-of-use-template/" title=""><i className="fa fa-angle-double-right"></i> Terms Of Use</a></li>
                  <li><a href="https://policies.google.com/privacy?hl=en-US" title=""><i className="fa fa-angle-double-right"></i> Privacy Policy</a></li>
                  <li><a href="https://www.inc.com/encyclopedia/return-policies.html" title=""><i className="fa fa-angle-double-right"></i> Return / Refund Policy</a></li>
                  <li><a href="https://www.gosur.com/map/india_orissa_rourkela/" title=""><i className="fa fa-angle-double-right"></i> Store Locations</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <h2 className="title">Payment</h2>
                <p>Secure payments at ShoGen. We accept major credit cards and trusted online methods, ensuring a safe shopping experience. Shop confidently for exceptional items, knowing your transaction is protected.</p>

              </div>
            </div>
          </div>
        </div>

        <section className="copyright">
          <div className="container">
              <div className="text-center">
                <p>Copyright © {new Date().getFullYear()} • ShoGen •
                  <img className='mb-1 mx-1' src={Pin} width="15px" alt="pin.png" />
                 IND</p>
              </div>
          </div>
        </section>
      </footer>
    </>
  );
};