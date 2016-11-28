import React from 'react';
import logo from '../logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  );
}
