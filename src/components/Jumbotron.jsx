import React from 'react';
import MediaQuery from 'react-responsive';
import FadeIn from './FadeIn';

export default function Jumbotron({ bgp, pathname, landing, img, children }) {
  const styles = {
    backgroundSize: 'cover',
    backgroundPosition: bgp ? bgp : 'center 20%',
  };

  const scrim = `
    linear-gradient(to bottom,rgba(255,255,255,.8) 0,
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
