import * as React from 'react';

// import { BrowserRouter } from 'react-router-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import MessagePage from '../pages/MessagePage';

class _Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={HomePage}>
            <Route path="about" component={AboutPage} />
            <Route path="inbox" component={MessagePage} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default _Router;
