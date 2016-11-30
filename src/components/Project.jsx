import React from 'react';
import projectData from '../data/projectData';

export default function Project({ params }) {
  const project = projectData.find(element => element.path === params.path);
  const Details = project.details;
  return (
    <div className="project">
      <div className="jumbotron">
        <h1>{project.name}</h1>
        <p>{project.jumbotronContent.img}</p>
        <p>{project.jumbotronContent.blurb}</p>
      </div>
      <div className="block wrap project-summary">
        <div className="project-summary__section">
          <div className="project-summary__label">Project Type:</div>
          <div className="project-summary__content">
            <div className="project-summary__tag">{project.summary.type}</div>
          </div>
        </div>
        <div className="project-summary__section">
          <div className="project-summary__label">Role:</div>
          <div className="project-summary__content">
            <div className="project-summary__tag">{project.summary.role}</div>
          </div>
        </div>
        <div className="project-summary__section">
          <div className="project-summary__label">
            Tools & Technologies Used:
          </div>
          <ul>
            {/* FIXME: index as key */}
            {project.summary.tools.map((tech, i) => {
              return <li key={i}>{tech}</li>;
            })}
          </ul>
        </div>
        <div className="project-summary__source">
          <div className="project-summary__label">Project source:</div>
          <div className="project-summary__content">
            <a
              className="btn project-summary__btn"
              href={project.summary.projectLink.href}
            >
              {project.summary.projectLink.text}
            </a>
          </div>
        </div>
      </div>

      {/* TODO: include wrapper div in Details component */}
      <div className="block wrap project-details">
        <Details />
      </div>
    </div>
  );
};
