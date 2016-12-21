import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router'
import Header from './components/Header';
import CTA from './components/CTA';
import Footer from './components/Footer';
import routes from './config/routes';
import FourOhFour from './components/404';

const App = () => (
  // <BrowserRouter history={history}>
  <BrowserRouter>
    <div>
      <Header />
      {
        routes.map((route, index) => (
          // rendering `Match`s with different
          // components but the same pattern as before
          <Match
            // FIXME: index as key
            key={index}
            pattern={route.pattern}
            // component={route.main}
            render={matchProps => {
              const Component = route.main;

              // TODO: double check where to put scrolling
              window.scroll(0, 0);

              return (
                <div className="content">
                  <Component {...matchProps} />
                  <CTA matchProps={matchProps} />
                </div>
              );
            }}
            exactly={route.exactly}
          />
        ))
      }
      <Miss component={FourOhFour} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
