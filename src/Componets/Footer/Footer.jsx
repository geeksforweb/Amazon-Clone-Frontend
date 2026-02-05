import React from "react";
import "./Footer.css";
import { footerTop, footerBottom } from "./footerData";

function Footer() {
  return (
    <footer className="amazon-footer">
      {/* TOP */}
      <div className="footer-top">
        <div className="footer-columns">
          {footerTop.map((col, i) => (
            <div key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* MIDDLE */}
      <div className="footer-middle">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
        />
        <div className="footer-selectors">
          <span>🌐 English</span>
          <span>$ USD - U.S. Dollar</span>
          <span>🇺🇸 United States</span>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-grid">
          {footerBottom.map((item, i) => (
            <div key={i}>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="footer-legal">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Consumer Health Data Privacy Disclosure</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <p className="footer-copy">© 1996-2023 all rights reserved.</p>
        <p className="disclaimer">
          Disclaimer: This website is a UI clone of popular platforms such as Amazon, created solely for educational and
          learning purposes. This project is not affiliated with, endorsed by,
          or connected to Amazon. All trademarks and brand
          names belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
