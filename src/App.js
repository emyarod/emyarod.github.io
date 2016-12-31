import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router'
import Header from './components/Header';
import CTA from './components/CTA';
import Footer from './components/Footer';
import routes from './config/routes';
import FourOhFour from './components/404';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      {
        routes.map((route, index) => (
          // rendering `Match`s with different
          // components but the same pattern as before
          <Match
            key={route.pattern}
            pattern={route.pattern}
            render={matchProps => {
              const Component = route.main;
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
