import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

// component is rendered when the pattern matches
const routes = [
  {
    main: Home,
    pattern: '/',
    exactly: true,
  },
  {
    main: Portfolio,
    pattern: '/portfolio',
  },
  {
    main: Contact,
    pattern: '/contact',
  },
];

export default routes;
