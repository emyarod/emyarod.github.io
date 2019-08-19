import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ icon }) {
  return (
    <svg className="icon" viewBox="0 0 1024 1024">
      <path d={icon}></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
