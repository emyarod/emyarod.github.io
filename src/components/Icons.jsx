import React from 'react';

export default function Icon({ icon }) {
  return (
    <svg className="icon" viewBox="0 0 1024 1024">
      <path d={icon}></path>
    </svg>
  );
};

Icon.PropTypes = {
  icon: React.PropTypes.string.isRequired,
};
