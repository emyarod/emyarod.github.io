import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className="block footer">
      <div className="wrap">
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <small className="text-center">
          © {new Date().getFullYear()}, Andrew Wang
        </small>
      </div>
    </div>
  );
}
