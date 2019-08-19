import React from 'react';
import Headroom from 'react-headroom';
import Isvg from 'react-inlinesvg';
import MediaQuery from 'react-responsive';
import { Link, NavLink } from 'react-router-dom';
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
              <NavLink to="/" exact>Home</NavLink>
              <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </nav>
          </header>
        </Headroom>
      )}
    </MediaQuery>
  );
}
