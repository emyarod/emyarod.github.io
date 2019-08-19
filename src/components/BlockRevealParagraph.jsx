import React from 'react';
import PropTypes from 'prop-types';
import BlockRevealer from './BlockRevealer';
import handleEnterViewport from '../config/utils';

export default function Paragraph(props) {
  return (
    <BlockRevealer
      class="paragraph"
      enterViewport={handleEnterViewport}
      animationDelay={props.animationDelay}
      bgc={props.bgc}
    >
      <p>{props.children}</p>
    </BlockRevealer>
  );
};

Paragraph.propTypes = {
  animationDelay: PropTypes.number,
  bgc: PropTypes.string,
  children: PropTypes.node.isRequired,
};
