import React from 'react';
import projectData from '../data/projectData';
import Jumbotron from './Jumbotron';
import Chip from './Chip';
import Icon from './Icons';
import iconPaths from '../data/iconPaths';
import BlockRevealer from './BlockRevealer';
import handleEnterViewport from '../config/utils';

export default function Project({ params }) {
  const {
    name,
    jumbotronContent: { blurb, img, bgp },
    summary: { type, role, tools, projectSource, projectLink },
    details: Details,
  } = projectData.find(element => element.path === params.path);

  return (
    <div className="project">
      <Jumbotron pathname={params.path} img={img} bgp={bgp}>
        <BlockRevealer enterViewport={handleEnterViewport}>
          <h1>{name}</h1>
        </BlockRevealer>
        <BlockRevealer enterViewport={handleEnterViewport} animationDelay={.25}>
          <p className="sb blurb">{blurb}</p>
        </BlockRevealer>
      </Jumbotron>
      <div className="block">
        <div className="wrap project-details">
          <div className="project-details__section">
            <h5 className="project-details__label sb">Project Type</h5>
            <div className="project-details__content">
              <Chip>{type}</Chip>
            </div>
          </div>
          <div className="project-details__section">
            <h5 className="project-details__label sb">Role</h5>
            <div className="project-details__content">
              <Chip>{role}</Chip>
            </div>
          </div>
          <div id="tech" className="project-details__section">
            <h5 className="project-details__label sb">Tech Stack</h5>
            <div className="project-details__content">
              {
                tools.map((tech, i) => {
                  const avatarContent = typeof tech !== 'string'
                    ? (
                      <Icon
                        className="icon"
                        icon={iconPaths[tech[0].toLowerCase()]}
                      />
                    )
                    : tech.charAt(0);

                  return (
                    <Chip key={tech} avatar avatarContent={avatarContent}>
                      {tech}
                    </Chip>
                  );
                })
              }
            </div>
          </div>
          {
            projectSource
              ? (
                <div className="project-details__section">
                  <h5 className="project-details__label sb">Project links</h5>
                  <div className="project-details__content">
                    {
                      projectSource
                        ? (
                          <a
                            className="btn project-details__btn"
                            href={projectSource.href}
                          >
                            {projectSource.text}
                          </a>
                        )
                        : null
                    }
                    {
                      projectLink
                        ? (
                          <a
                            className="btn project-details__btn"
                            href={projectLink.href}
                          >
                            {projectLink.text}
                          </a>
                        )
                        : null
                    }
                  </div>
                </div>
              )
              : null
          }
          <div className="project-details__section">
            <hr />
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
};

Project.PropTypes = {
  params: React.PropTypes.object.isRequired,
};
