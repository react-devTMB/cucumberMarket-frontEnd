import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Intro from './Pages/IntroPages/index';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/intro']} component={Intro} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
