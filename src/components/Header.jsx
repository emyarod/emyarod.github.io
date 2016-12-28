import React from 'react';
import Headroom from 'react-headroom';
import Isvg from 'react-inlinesvg';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router';
import logo from '../logo.svg';

export default function Header() {
  return (
    <MediaQuery minWidth={576}>
      {() => (
        <Headroom>
          <header className="App-header">
            <Link to="/" className="Wang">
              <Isvg
                src={logo}
                uniquifyIDs={false}
                alt="Home"
              >
              </Isvg>
            </Link>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/portfolio" activeClassName="active">Portfolio</Link>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </nav>
          </header>
        </Headroom>
      )}
    </MediaQuery>
  );
}
