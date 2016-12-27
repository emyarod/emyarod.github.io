import React from 'react';
import Isvg from 'react-inlinesvg';
import { Watch } from 'scrollmonitor-react';
import FadeIn from './FadeIn';

export default Watch(props => {
  return (
    <div className="svg-container">
      <FadeIn>
        <Isvg src={props.src} uniquifyIDs={false} alt={props.alt}></Isvg>
      </FadeIn>
    </div>
  );
});
