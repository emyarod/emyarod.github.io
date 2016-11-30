import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

// FIXME: no longer true vvvvvvvvvvvv
// Each "route" has two components, one for the sidebar
// and one for the main area, we'll render them
// simultaneously when the pattern matches
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
