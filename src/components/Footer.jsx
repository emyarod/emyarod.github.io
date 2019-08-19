import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icons';
import iconPaths from '../data/iconPaths';

export default function Footer() {
  return (
    <div className="block footer">
      <div className="wrap">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="social">
          {/* <a href="https://www.linkedin.com/in/andrew-wang-02573868">
            <Icon className="icon" icon={iconPaths.linkedin} />
          </a> */}
          <a href="https://github.com/emyarod">
            <Icon className="icon" icon={iconPaths.github} />
          </a>
          <a href="http://codepen.io/emyarod/">
            <Icon className="icon" icon={iconPaths.codepen} />
          </a>
        </div>
        <small className="text-center">
          © {new Date().getFullYear()}, Andrew Wang
        </small>
      </div>
    </div>
  );
}
