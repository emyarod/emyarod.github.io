import Portfolio from '../components/projects/Portfolio';
import Refuge from '../components/projects/Refuge';
import Koreaboo from '../components/projects/Koreaboo';
import Flattish from '../components/projects/Flattish';
import Discorcabot from '../components/projects/Discorcabot';
import SFList from '../components/projects/SFList';
import Smurf from '../components/projects/Smurf';
import portfolioimg from '../static/img/Portfolio/portfolio/jumbotron.jpg';
import refugeimg from '../static/img/Portfolio/refuge/jumbotron.jpg';
import koreabooimg from '../static/img/Portfolio/koreaboo/jumbotron.jpg';
import flattishimg from '../static/img/Portfolio/flattish/jumbotron.jpg';
import discorcabotimg from '../static/img/Portfolio/discorcabot/jumbotron.jpg';
import smurfimg from '../static/img/Portfolio/smurf/jumbotron.jpg';
import sflistimg from '../static/img/Portfolio/sflist/jumbotron.jpg';

const projectData = [
  {
    name: 'Portfolio',
    path: 'portfolio',
    jumbotronContent: {
      img: portfolioimg,
      blurb: 'Personal portfolio website.',
    },
    summary: {
      type: 'Website',
      role: 'Design & Development',
      tools: [
        'React',
        'React Router',
        ['Sass'],
        'PostCSS',
        'Webpack',
        'Yarn',
        'Babel',
        'Adobe Illustrator',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/afw/',
      },
    },
    details: Portfolio,
  },

  // Refuge
  {
    name: 'Refuge',
    path: 'refuge',
    jumbotronContent: {
      img: refugeimg,
      blurb: 'A note taking application, written in React.',
      bgp: 'center 70%',
    },
    summary: {
      type: 'Web Application',
      role: 'Design & Development',
      tools: [
        ['React'],
        'React Router',
        'Firebase',
        'Node.js',
        ['Sass'],
        'PostCSS',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/refuge',
      },
      projectLink: {
        text: 'See Refuge in action',
        href: 'https://refuge-fed63.firebaseapp.com/',
      },
    },
    details: Refuge,
  },

  // Koreaboo
  {
    name: 'Koreaboo',
    path: 'koreaboo',
    jumbotronContent: {
      img: koreabooimg,
      blurb: 'Website for a Korean media and entertainment news company.',
      bgp: 'center 60%',
    },
    summary: {
      type: 'Website',
      role: 'Development',
      tools: [
        ['WordPress'],
        ['Sass'],
        ['Gulp'],
      ],
    },
    details: Koreaboo,
  },

  // Flattish
  {
    name: 'Flattish',
    path: 'flattish',
    jumbotronContent: {
      img: flattishimg,
      blurb: 'Material Design influenced CSS stylesheet generator for Reddit.',
    },
    summary: {
      type: 'Web Application',
      role: 'Design & Development',
      tools: [
        'Node.js',
        ['Sass'],
        'Babel',
        'Webpack',
        'jQuery',
        'Adobe Photoshop',
        'Bourbon',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/flattish/',
      },
      projectLink: {
        text: 'See Flattish in action',
        href: 'https://emyarod.github.io/flattish/',
      },
    },
    details: Flattish,
  },

  // Discorcabot
  {
    name: 'Discorcabot',
    path: 'discorcabot',
    jumbotronContent: {
      img: discorcabotimg,
      blurb: 'A general purpose Discord chat bot.',
      bgp: 'center 50%',
    },
    summary: {
      type: 'Web Application',
      role: 'Development',
      tools: [
        'Node.js',
        ['Gulp'],
        'Babel',
        'Webpack',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/discorcabot',
      },
    },
    details: Discorcabot,
  },

  // Smurf
  {
    name: 'Steam Checker',
    path: 'smurf',
    jumbotronContent: {
      img: smurfimg,
      blurb: 'A Steam account and game statistics checker for Counter-Strike: Global Offensive players.',
    },
    summary: {
      type: 'Web Application',
      role: 'Design & Development',
      tools: [
        'Node.js',
        'Babel',
        ['Gulp'],
        'Express.js',
        'Handlebars.js',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/smurf',
      },
      projectLink: {
        text: 'See Steam Checker in action',
        href: 'http://smurf.orca.ninja/',
      },
    },
    details: Smurf,
  },

  // SFList
  {
    name: 'SF List',
    path: 'sflist',
    jumbotronContent: {
      img: sflistimg,
      blurb: 'A Street Fighter move list repository.',
      bgp: 'center 50%',
    },
    summary: {
      type: 'Web Application',
      role: 'Development',
      tools: [
        ['Jekyll'],
        'YAML',
        'jQuery',
        ['Sass'],
        'Adobe Photoshop',
      ],
      projectSource: {
        text: 'View source on GitHub',
        href: 'https://github.com/emyarod/discorcabot',
      },
      projectLink: {
        text: 'See SF List in action',
        href: 'https://emyarod.github.io/sflist/',
      },
    },
    details: SFList,
  },
];

export default projectData;
