import React from 'react';
import Isvg from 'react-inlinesvg';
import { Watch } from 'scrollmonitor-react';
import FadeIn from './FadeIn';

export default Watch(({ src, alt }) => {
  return (
    <div className="svg-container">
      <FadeIn>
        <Isvg src={src} uniquifyIDs={false} alt={alt}></Isvg>
      </FadeIn>
    </div>
  );
});

Watch.PropTypes = {
  src: React.PropTypes.node.isRequired,
  alt: React.PropTypes.string.isRequired,
};
