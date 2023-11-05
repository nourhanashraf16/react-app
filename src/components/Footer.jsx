import React from "react";
import footerLogo from "../assets/logo2_footer.png.webp";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="footer py-5">
      <div className="container">
        <div className="row justify-content-between">
          <figure className="col-md-6 col-lg-4 footer_logo text-sm-center text-md-start ">
            <img src={footerLogo} alt="footer_logo" />
          </figure>
          <div className="col-md-6 col-lg-2 footer_content text-sm-center text-md-start ">
            <h5 className="mb-3">Shop Men</h5>
            <ul>
              <li>
                <Link to="">Clothing Fashion</Link>
              </li>
              <li>
                <Link to="">Winter</Link>
              </li>
              <li>
                <Link to="">Summer</Link>
              </li>
              <li>
                <Link to="">Formal</Link>
              </li>
              <li>
                <Link to="">Casual</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 footer_content text-sm-center  text-md-start ">
            <h5 className="mb-3">Shop Women</h5>
            <ul>
              <li>
                <Link to="">Clothing Fashion</Link>
              </li>
              <li>
                <Link to="">Winter</Link>
              </li>
              <li>
                <Link to="">Summer</Link>
              </li>
              <li>
                <Link to="">Formal</Link>
              </li>
              <li>
                <Link to="">Casual</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 footer_content text-sm-center text-md-start">
            <h5 className="mb-3">Baby collection</h5>
            <ul>
              <li>
                <Link to="">Clothing Fashion</Link>
              </li>
              <li>
                <Link to="">Winter</Link>
              </li>
              <li>
                <Link to="">Summer</Link>
              </li>
              <li>
                <Link to="">Formal</Link>
              </li>
              <li>
                <Link to="">Casual</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-2 footer_content text-sm-center  text-md-start ">
            <h5 className="mb-3">Quick Links</h5>
            <ul>
              <li>
                <Link to="">Track Your Order</Link>
              </li>
              <li>
                <Link to="">Support</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
