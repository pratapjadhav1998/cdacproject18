import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
   

    <>
      <footer class="page-footer font-small blue pt-4 footer-bg">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">FarmFresh Network</h5>
              <p>Now Your Stock Never Goes Down ! ! !</p>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/signup">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href="#">Nayan D</a>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
