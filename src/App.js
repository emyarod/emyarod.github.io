import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CTA from './components/CTA';
import Footer from './components/Footer';
import routes from './config/routes';
import FourOhFour from './components/404';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {
        routes.map((route, index) => (
          <Route
            key={route.pattern}
            path={route.pattern}
            render={routeProps => {
              const Component = route.main;
              window.scroll(0, 0);
              return (
                <div className="content">
                  <Component {...routeProps} />
                  <CTA {...routeProps} />
                </div>
              );
            }}
            exact={route.exactly}
          />
        ))
      }
      <Route component={FourOhFour} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
