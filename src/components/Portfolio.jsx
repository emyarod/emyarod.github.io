import React from 'react';
import { Match, Link } from 'react-router';
import Jumbotron from './Jumbotron';
import Label from './Label';
import Project from './Project';
import BlockRevealer from './BlockRevealer';
import BlockRevealParagraph from './BlockRevealParagraph';
import handleEnterViewport from '../config/utils';
import projectData from '../data/projectData';
import PortfolioImg from '../static/img/Portfolio/portfolio.jpg';

export default function Portfolio({ pathname }) {
  return (
    <div className="portfolio">
      {/* portfolio landing page */}
      <Match
        pattern={pathname}
        render={() => (
          <div>
            <Jumbotron pathname={pathname} img={PortfolioImg}>
              <BlockRevealer enterViewport={handleEnterViewport}>
                <h1>Portfolio</h1>
              </BlockRevealer>
              <BlockRevealer
                enterViewport={handleEnterViewport}
                animationDelay={.25}
              >
                <p className="sb blurb">
                  Have a look through a small selection of some of my previous work.
                </p>
              </BlockRevealer>
            </Jumbotron>
            <div className="block">
              <div className="wrap">
                <Label>Selected projects</Label>
                <div className="tiles">
                  {
                    projectData.map((project, i) => (
                      <div key={project.path} className="project-tile">
                        <Link to={`${pathname}/${project.path}`}>
                          <BlockRevealer
                            enterViewport={handleEnterViewport}
                            bgc="#c392ff"
                          >
                            <h4>{project.name}</h4>
                          </BlockRevealer>
                          <BlockRevealParagraph bgc="#c392ff">
                            {project.jumbotronContent.blurb}
                          </BlockRevealParagraph>
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        )}
        exactly
      />

      {/* portfolio project */}
      <Match pattern={`${pathname}/:path`} component={Project} />
    </div>
  );
};

Portfolio.PropTypes = {
  pathname: React.PropTypes.string.isRequired,
};
