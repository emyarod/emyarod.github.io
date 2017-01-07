import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h4 className="label">Project overview</h4>
      <p>
        My personal website, built with React. The site was designed to showcase my work in a clean and quick loading interface.
      </p>
      <br />
      <h4 className="label">The Process</h4>
      <p>
        I host my website on a custom GitHub Pages domain, and I use Cloudflare to encrypt the connection between visitors and Cloudflare.
      </p>
      <p>
        With an emphasis on speed in mind, I chose to render the site using React, and all of the routing is handled by React Router. Since updates and changes to the DOM are only applied when necessary, navigating the site feels quick and snappy.
      </p>
      <p>
        The site contains five main pages: the home page, a portfolio page, a contact page, a project page template, and a 404 page. Since every page contains the header and footer, I decided to make each page its own component. Because of this, the header and footer are not re-rendered while navigating through the website.
      </p>
      <p>
        Another point of emphasis when creating the site was responsiveness. Usage of media queries and flex box allows for the site to look consistent on virtually any device screen size and screen density. All of the icons on the site are also created with SVG to maintain clarity.
      </p>
    </div>
  );
}
