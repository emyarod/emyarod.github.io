import React from 'react';

export default function Koreaboo() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        Founded in 2010, Koreaboo is one of the world's leading internet news sites for Korean pop culture and entertainment. Koreaboo has an extensive reach with over eight million readers, and the company has partnered with other Korean companies such as CJ E&M, Dispatch, and TV Report to deliver English language coverage of Korean entertainment news.
      </p>
      <br />
      <h4 className="label">The Process</h4>
      <p>
        I was approached by the founder and CEO of Koreaboo to implement a design refresh for their main website as they migrated to a new CMS. My tasks involved configuring their WordPress installation and implementing custom features in their WordPress theme, as well as helping with the transition to a new tech stack.
      </p>
      <p>
        Rather than continuously adding on to their existing single large stylesheet, I refactored their CSS to more manageable Sass modules. The switch to Sass helped maintain consistent colors and styles, which were not being enforced previously. I also introduced a build step for easy Sass compilation using Gulp and npm scripts.
      </p>
    </div>
  );
}
