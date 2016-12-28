import React from 'react';
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

Paragraph.PropTypes = {
  animationDelay: React.PropTypes.number,
  bgc: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};
