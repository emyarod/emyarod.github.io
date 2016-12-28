import React from 'react';
import { Match, Link } from 'react-router';
import projectData from '../data/projectData';
import Project from './Project';

export default function Portfolio({ pathname }) {
  return (
    <div className="portfolio">
      <Match pattern={`${pathname}/:path`} component={Project} />
      <Match
        pattern={pathname}
        render={() => (
          <div>
            <div className="jumbotron">
              <h1>Portfolio</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
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
    </div>
  );
};

Portfolio.PropTypes = {
  pathname: React.PropTypes.string.isRequired,
};
