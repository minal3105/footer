import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">

          <hr />

          {/* Main footer content code */}
          <div className="col-md-4">
            <ul type="none">
              {/* heading */}
              <li className="lightb">ABOUT CARDEKHO</li>
              {/* content starting.... */}
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Careers With Us</li>
              </a>
              <a href="#">
                <li>Terms & Conditions</li>
              </a>
              <a href="#">
                <li>Privacy Policy</li>
              </a>
              <a href="#">
                <li>Corporate Policies</li>
              </a>
              <a href="#">
                <li>Investors</li>
              </a>
              <a href="#">
                <li>FAQs</li>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <ul type="none">
              <li className="lightb">CONNECT WITH US</li>
              <a href="#">
                <li>Feedback</li>
              </a>
              <a href="#">
                <li>Contact Us</li>
              </a>
              <a href="#">
                <li>Advertise with Us</li>
              </a>
            </ul>
          </div>
          <div className="col-md-4">
            <ul type="none">
              <li className="lightb">OTHERS</li>
              <a href="#">
                <li>Health Insurance</li>
              </a>
              <a href="#">
                <li>Term life insurance</li>
              </a>
              <a href="#">
                <li>Crack-Ed</li>
              </a>
              <a href="#">
                <li>Personal loan</li>
              </a>
              <a href="#">
                <li>TyreDekho</li>
              </a>
              <a href="#">
                <li>BatteryDekho</li>
              </a>
            </ul>
          </div>
        </div>
        {/* Code after horizontal line */}


        <hr />


        <div className="row">
          <div className="col-md-6">
            <p class="bottom">&copy; 2023 CarSelecta Pvt. Ltd.</p>
          </div>


          {/* icon code */}
          <div className="col-md-6">
            <span className="icon">
              <strong> Connect: </strong>
              &nbsp;
              <a href="#" className="me-4">
                <i className="bi bi-facebook black-icon"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-twitter black-icon"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-youtube black-icon"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-instagram black-icon"></i>
              </a>
              <a href="#" className="me-4">
                <i className="bi bi-linkedin black-icon"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
