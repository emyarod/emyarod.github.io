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
              <h1>Portfolio</h1>
              <div>
                <p className="sb blurb">
                  Have a look through a small selection of some of my previous work.
                </p>
              </div>
            </Jumbotron>
            <div className="block">
              <div className="wrap">
                <h3>Selected projects</h3>
                {/* TODO: bricklayer */}
                {
                  projectData.map((project, i) => (
                    // FIXME: index as key
                    <div key={i}>
                      <Link to={`${pathname}/${project.path}`}>
                        {project.name}
                      </Link>
                    </div>
                  ))
                }
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
