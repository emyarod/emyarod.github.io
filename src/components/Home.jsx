import React from 'react';
import Jumbotron from './Jumbotron';
import Label from './Label';
import FadeIn from './FadeIn';
import BlockRevealer from './BlockRevealer';
import handleEnterViewport from '../config/utils';
import AnimatedSVG from './AnimatedSVG';
import clouds from '../static/img/Home/clouds.svg';
import rwd from '../static/img/Home/rwd.svg';
import apps from '../static/img/Home/apps.svg';
import core from '../static/img/Home/core.svg';

export default function Home({ pathname }) {
  return (
    <div className="home">
      <Jumbotron pathname={pathname} img={clouds} landing>
        <BlockRevealer enterViewport={handleEnterViewport}>
          <h1>Andrew Wang</h1>
        </BlockRevealer>
        <BlockRevealer enterViewport={handleEnterViewport} animationDelay={.25}>
          <h5 className="sb blurb">
            Front-end web developer based in the Bay Area
          </h5>
        </BlockRevealer>
      </Jumbotron>
      {/* BEGIN ABOUT */}
      <div className="block dark">
        <div className="wrap">
          <Label>About me</Label>
          <FadeIn>
            <p>My name is Andrew Wang, and I am a web developer who specializes in working on the front end.</p>
          </FadeIn>
          <FadeIn>
            <p>I enjoy uncovering and solving design problems, developing robust web applications, as well as creating vivid web experiences. Driven by a passion for web technologies, I am always looking to learn new frameworks, languages, and paradigms.</p>
          </FadeIn>
        </div>
      </div>
      {/* END ABOUT */}
      {/* BEGIN SERVICES */}
      <div className="block">
        <div className="wrap">
          <Label>Services & skillset</Label>
          <div className="section">
            <AnimatedSVG
              fullyEnterViewport={handleEnterViewport}
              src={rwd}
              alt="Website Creation"
            />
            <div className="copy">
              <BlockRevealer
                fullyEnterViewport={handleEnterViewport}
                bgc="#86eaef"
              >
                <h5>Website Creation</h5>
              </BlockRevealer>
              <FadeIn>
                <p>
                  Using modern browser technologies, I can construct websites, while fixing and avoiding common cross-browser compatibility issues. I have experience working on user interfaces, and I possess an eye for detail when it comes to user interaction and user experience.
                </p>
              </FadeIn>
            </div>
          </div>
          <div className="section">
            <AnimatedSVG
              fullyEnterViewport={handleEnterViewport}
              src={apps}
              alt="Web Application Development"
            />
            <div className="copy">
              <BlockRevealer
                fullyEnterViewport={handleEnterViewport}
                bgc="#86eaef"
              >
                <h5>Web Application Development</h5>
              </BlockRevealer>
              <FadeIn>
                <p>
                  I can work collaboratively with designers to create front-end elements for web applications and also with back-end engineers to implement application features. My understanding of front-end technologies allows me to build efficient front-end systems and helps me optimize for client-side performance.
                </p>
              </FadeIn>
            </div>
          </div>
          <div className="section">
            <AnimatedSVG
              fullyEnterViewport={handleEnterViewport}
              src={core}
              alt="Technical Expertise"
            />
            <div className="copy">
              <BlockRevealer
                fullyEnterViewport={handleEnterViewport}
                bgc="#86eaef"
              >
                <h5>Technical Expertise</h5>
              </BlockRevealer>
              <FadeIn>
                <p>
                  Here are some of the tools, libraries, and frameworks that I am comfortable with using:
                </p>
              </FadeIn>
              <div id="skills">
                <FadeIn>
                  <h6>Core skillset</h6>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3, SCSS, PostCSS</li>
                    <li>JavaScript (ES6), jQuery</li>
                  </ul>
                </FadeIn>
                <FadeIn>
                  <h6>Working knowledge</h6>
                  <ul>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                  </ul>
                </FadeIn>
                <FadeIn>
                  <h6>Tools</h6>
                  <ul>
                    <li>Git</li>
                    <li>Gulp, Webpack</li>
                    <li>Adobe Creative Suite</li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SERVICES */}
    </div>
  );
}

Home.PropTypes = {
  pathname: React.PropTypes.string.isRequired,
};
