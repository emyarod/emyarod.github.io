import React from 'react';
import BlockRevealer from './BlockRevealer';
import handleEnterViewport from '../config/utils';

export default function Label({ children }) {
  return (
    <BlockRevealer enterViewport={handleEnterViewport} bgc="#ffd464">
      <div className="label">{children}</div>
    </BlockRevealer>
  );
};

Label.PropTypes = {
  children: React.PropTypes.element.isRequired,
};
