import React from 'react';
import flattishimg from '../../static/img/Portfolio/flattish/body.jpg';

export default function Flattish() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        Flattish was created in order to add elements and principles of <a href="https://material.io/">Material Design</a> to <a href="https://www.reddit.com/"> Reddit</a> stylesheets. In addition to styling the UI according to the Material Design guidelines, Flattish adds fluid animations that respond to user actions.
      </p>
      <p>
        Flattish also aims to work seamlessly with the popular browser extension, <a href="http://redditenhancementsuite.com/">Reddit Enhancement Suite</a>, by integrating its nightmode feature and extending its styles to include RES-added elements. Users can customize Flattish with the <a href="https://emyarod.github.io/flattish/">theme editor application</a>, which offers addons including options for a sidebar image, pinned sidebar topics, and up to 36 rotating header images.
      </p>
      <figure>
        <img className="mockup" alt={"SF List"} src={flattishimg} />
      </figure>
      <h4 className="label">The Process</h4>
      <p>
        While most of the icons come from Google's open source icon library, several of Flattish's sprite animations were custom made in Photoshop.
      </p>
      <p>
        Designing the Flattish CSS theme was an excellent exercise in CSS, particularly because I was adding style rules on top of Reddit's base styles as well as Reddit Enhancement Suite's very <a href="https://github.com/honestbleeps/Reddit-Enhancement-Suite/search?l=SCSS&q=%21important&utf8=%E2%9C%93">specific styles</a>.
      </p>
      <p>
        Building the theme editor was an exercise in JavaScript. In order to live update the stylesheet changes as the user makes them on the theme editor, the theme customizer app adds inline styles to the iframe preview element while also manipulating the Sass source files. When the user is finished customizing the theme, the edited Sass is compiled down to CSS in the browser itself, and a ZIP archive with the compiled stylesheets is made available for the user to download.
      </p>
    </div>
  );
}
