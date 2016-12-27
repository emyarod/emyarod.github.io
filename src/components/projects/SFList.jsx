import React from 'react';
import sflistimg from '../../static/img/Portfolio/sflist/body.jpg';

export default function SFList() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        SF List is a simple static site with command notations for each character in <em>Super Street Fighter II Turbo</em>, <em>Street Fighter III: 3rd Strike</em>, <em>Ultra Street Fighter IV</em> (and Omega Edition), and <em>Street Fighter V</em>.
      </p>
      <figure>
        <img className="mockup" alt={"SF List"} src={sflistimg} />
        <figcaption>A character page in SF List</figcaption>
      </figure>
      <h4 className="label">The Process</h4>
      <p>
        After the project was apparently abandoned by its original creator, I decided to maintain an up to date fork. The site is generated by Jekyll, and the assets used for move notations are created in Photoshop.
      </p>
      <p>
        A jQuery script then replaces keywords in the generated HTML pages with the corresponding images to better display the inputs for each command.
      </p>
      <p>
        I am currently planning to rewrite the site using React and a JavaScript based static site generator.
      </p>
    </div>
  );
}
