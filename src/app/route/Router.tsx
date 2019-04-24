import * as React from 'react';
import { Switch, HashRouter, BrowserRouter } from 'react-router-dom';

import RouteMap from './RouteMap';

// my le fo len
const RouterUrl: any = true ? HashRouter : BrowserRouter;

type Props = {};
type States = { routes: React.ReactNode[] };

class Router extends React.PureComponent<Props, States> {
  constructor(props: Props) {
    super(props);

    this.state = {
      routes: RouteMap.getRouteComponets(),
    };
  }
  render() {
    return (
      <RouterUrl>
        <Switch>{this.state.routes}</Switch>
      </RouterUrl>
    );
  }
}

export default Router;
