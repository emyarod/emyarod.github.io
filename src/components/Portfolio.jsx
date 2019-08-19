import React from 'react';
import { Route, Link } from 'react-router-dom';
import Jumbotron from './Jumbotron';
import Label from './Label';
import Project from './Project';
import BlockRevealer from './BlockRevealer';
import BlockRevealParagraph from './BlockRevealParagraph';
import handleEnterViewport from '../config/utils';
import projectData from '../data/projectData';
import PortfolioImg from '../static/img/Portfolio/portfolio.jpg';

export default function Portfolio(props) {
  const { path } = props.match;
  return (
    <div className="portfolio">
      {/* portfolio landing page */}
      <Route
        path={path}
        render={() => (
          <div>
            <Jumbotron img={PortfolioImg}>
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
                    projectData.map(project => (
                      <div key={project.path} className="project-tile">
                        <Link to={`${path}/${project.path}`}>
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
        exact
      />
      {/* portfolio project */}
      <Route path={`${path}/:path`} component={Project} />
    </div>
  );
};
