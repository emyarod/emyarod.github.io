import React from 'react';

export default function Icon({ icon }) {
  return (
    <svg viewBox="0 0 1024 1024">
      <path d={icon}></path>
    </svg>
  );
};
