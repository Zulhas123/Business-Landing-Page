import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}
