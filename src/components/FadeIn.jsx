import React from 'react';
import { Watch } from 'scrollmonitor-react';
import handleEnterViewport from '../config/utils';

const Wrap = Watch(props => <div className="fadein">{props.children}</div>);

export default function FadeIn(props) {
  return <Wrap enterViewport={handleEnterViewport}>{props.children}</Wrap>;
};

Wrap.PropTypes = {
  children: React.PropTypes.node.isRequired,
};

FadeIn.PropTypes = {
  children: React.PropTypes.node.isRequired,
};
