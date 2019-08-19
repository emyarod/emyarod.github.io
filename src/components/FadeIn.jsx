import React from 'react';
import PropTypes from 'prop-types';
import { Watch } from 'scrollmonitor-react';
import handleEnterViewport from '../config/utils';

const Wrap = Watch(props => <div className="fadein">{props.children}</div>);

export default function FadeIn(props) {
  return <Wrap enterViewport={handleEnterViewport}>{props.children}</Wrap>;
};

Wrap.propTypes = {
  children: PropTypes.node.isRequired,
};

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
};
