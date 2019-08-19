import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';

const CTAOptions = {
  home: {
    title: 'Interested in working together?',
    subtitle: `Send me a message and let's get things started. Or check out some of my work if you want to learn more.`,
    buttons() {
      return (
        <div className="cta__buttons cta__buttons--home">
          <Link to="/portfolio" className="btn">Check out my portfolio</Link>
          <Link to="/contact" className="btn">Get in touch with me</Link>
        </div>
      );
    },
  },
  portfolio: {
    title: 'Like what you see?',
    subtitle: `Reach out to me, and let's discuss I can do for you.`,
    buttons() {
      return (
        <div className="cta__buttons">
          <Link to="/contact" className="btn">Get in touch with me</Link>
        </div>
      )
    },
  },
  portfolioNav: {
    title: null,
    subtitle: null,
    buttons(prev, next) {
      return (
        <div className="cta__buttons cta__buttons--portfolioNav">
          <Link to={`/portfolio/${prev}`} className="btn">
            ← Previous project
          </Link>
          <Link to={`/portfolio/${next}`} className="btn">
            Next project →
          </Link>
        </div>
      )
    },
  },
};

function CTABase({ ctaType, prev, next }) {
  return (
    <div className={`block cta cta--${ctaType}`}>
      <div className={`wrap cta__wrap cta__wrap--${ctaType}`}>
        <div className={`cta__text cta__text--${ctaType}`}>
          {
            CTAOptions[ctaType].title
              ? (
                <h5 className="cta__text__title">
                  {CTAOptions[ctaType].title}
                </h5>
              )
              : null
          }
          {
            CTAOptions[ctaType].subtitle
              ? (
                <p className="cta__text__subtitle">
                  {CTAOptions[ctaType].subtitle}
                </p>
              )
              : null
          }
        </div>
        {CTAOptions[ctaType].buttons(prev, next)}
      </div>
    </div>
  );
};

export default function CTA(props) {
  if (props.match.path === '/') {
    return <CTABase ctaType="home" />;
  }

  if (props.match.path === '/portfolio') {
    if (props.location.pathname === props.match.path) {
      return <CTABase ctaType="portfolio" />
    }

    const projectPath = props.location.pathname.slice(11);

    const projectIndex = projectData.findIndex(
      element => element.path === projectPath
    );

    /**
     * if the index of the previous project is -1,
     * link to the last project in the portfolio array
     */
    const { path: prevProject } = (projectIndex - 1 < 0)
      ? projectData[projectData.length - 1]
      : projectData[projectIndex - 1];

    /**
     * if the index of the next project is
     * greater than the length of the portfolio array,
     * link to the first project in the portfolio array
     */
    const { path: nextProject } = (projectIndex + 1 === projectData.length)
      ? projectData[0]
      : projectData[projectIndex + 1];

    return <CTABase
        ctaType="portfolioNav"
        prev={prevProject}
        next={nextProject}
      />;
  }

  return null;
}
