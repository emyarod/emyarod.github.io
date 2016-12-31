import React from 'react';
import MediaQuery from 'react-responsive';
import FadeIn from './FadeIn';

export default function Jumbotron({ bgp, pathname, landing, img, children }) {
  const colors = [
    '#ed8a87',
    '#ffd464',
    '#00b259',
    '#86eaef',
    '#c392ff',
  ];

  const styles = {
    backgroundSize: landing ? null : 'cover',
    backgroundPosition: bgp ? bgp : 'center 20%',
    backgroundColor: landing
      ? colors[Math.floor(Math.random() * colors.length)]
      : null,
  };

  const scrim = `
    linear-gradient(to bottom,rgba(255,255,255,.6) 0%,
    rgba(255,255,255,.6) 100%)
  `;

  return (
    <FadeIn>
      <div className="jumbotron-container">
        <MediaQuery minWidth={1201}>
          <div
            className={`jumbotron ${landing ? 'landing' : ''}`}
            style={{
              ...styles,
              'backgroundImage': `url(${img})`,
            }}
          >
            <div className="wrap">{children}</div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1200}>
          <div
            className={`jumbotron ${landing ? 'landing' : ''}`}
            style={{
              ...styles,
              'backgroundImage': `${scrim}, url(${img})`,
            }}
          >
            <div className="wrap">{children}</div>
          </div>
        </MediaQuery>
      </div>
    </FadeIn>
  );
}

Jumbotron.PropTypes = {
  bgp: React.PropTypes.string,
  pathname: React.PropTypes.string.isRequired,
  landing: React.PropTypes.string,
  img: React.PropTypes.node,
  children: React.PropTypes.node.isRequired,
};
