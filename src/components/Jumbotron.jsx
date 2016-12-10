import React from 'react';
import projectData from '../data/projectData';
import ContactImg from '../static/img/Contact/contact.jpg';

export default function Jumbotron(props) {
  const project = projectData.find(
    element => `/portfolio/${element.path}` === props.pathname
  ) || props.pathname;

  switch (project) {
    case '/':
      return (
        <div className="jumbotron landing">
          <div className="wrap">
            <h1>Andrew Wang</h1>
            <h5 className="serif">
              <i>Front-end web developer based in the Bay Area</i>
            </h5>
          </div>
        </div>
      );
    case '/portfolio':
      return (
        <div className="jumbotron">
          <div className="wrap">
            <h1>Portfolio</h1>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      );
    case '/contact':
      return (
        <div className="jumbotron" style={{
          'backgroundImage': `linear-gradient(to bottom,rgba(255,255,255,.8) 0,rgba(255,255,255,.6) 100%), url(${ContactImg})`,
          'backgroundSize': 'cover',
          'backgroundPosition': 'center 20%',
        }}>
          <div className="wrap">
            <h1>Let’s have a chat.</h1>
            <p>I'm always interested in new opportunities. If you have a project you'd like to discuss, or even if you just want to find out more about me, get in touch with me so we can get started.</p>
          </div>
        </div>
      );
    case projectData.find(e => `/portfolio/${e.path}` === props.pathname):
      return (
        <div className="jumbotron">
          <div className="wrap">
            <h1>{project.name}</h1>
            <p>{project.jumbotronContent.img}</p>
            <p>{project.jumbotronContent.blurb}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}
