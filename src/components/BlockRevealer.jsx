import React from 'react';
import PropTypes from 'prop-types';
import { Watch } from 'scrollmonitor-react';

export default Watch(props => {
  return (
    <div className={`block-revealer ${props.class}`}>
      <div
        className="block-revealer__content"
        style={{
          'animationDelay': props.animationDelay
            ? `${props.animationDelay + .5}s`
            : '.5s',
        }}
      >
        {props.children}
      </div>

      <div
        className="block-revealer__concealer"
        style={{
          'backgroundColor': props.bgc ? props.bgc : '#00b259',
          'animationDelay': props.animationDelay
            ? `${props.animationDelay}s, ${props.animationDelay + .5}s`
            : '0s, .5s',
        }}
      >
      </div>
    </div>
  );
});

Watch.propTypes = {
  class: PropTypes.string,
  animationDelay: PropTypes.number,
  bgc: PropTypes.string,
  children: PropTypes.node.isRequired,
};
