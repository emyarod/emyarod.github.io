import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router';
import logo from '../logo.svg';

export default function Header() {
  return (
    <Headroom>
      <header className="App-header">
        <nav>
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* FIXME: activeStyle/activeClassName */}
            <Link to="/">Home</Link>
            <Link to="/portfolio" activeClassName="active">Portfolio</Link>
            <Link to="/contact" activeClassName="active">Contact</Link>
          </div>
        </nav>
      </header>
    </Headroom>
  );
}
