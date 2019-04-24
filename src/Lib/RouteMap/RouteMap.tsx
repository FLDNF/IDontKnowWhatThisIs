import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import RouteMapDefaultConfig from './RouteMapDefaultConfig';
import { RoutePropsType, ConfigType } from './RouteMapTypes';
import AuthRouter from './AuthRouter';

class RouteMap {
  private routeComponets: Array<React.ReactNode>;
  private config: ConfigType;

  constructor(routes: RoutePropsType[], config: ConfigType) {
    this.config = config;
    this.routeComponets = [];

    this.iniRoutes(routes);
  }

  renderRouter(routeProps: RoutePropsType): React.ReactNode {
    const { auth, layout, routeStrategy, ...route } = routeProps;
    const node = <Route key={route.path as string} {...route as RouteProps} />;
    let component: React.ReactNode;

    if (auth === true) {
      component = (
        <AuthRouter key={route.path as string} strategy={routeStrategy}>
          {node}
        </AuthRouter>
      );
    } else {
      component = node;
    }

    return component;
  }

  iniRoutes(routes: RoutePropsType[]) {
    const { defaultLayout, defaultRouteStrategy } = {
      ...RouteMapDefaultConfig,
      ...this.config,
    };

    if (Array.isArray(routes)) {
      this.routeComponets = routes.map(route => {
        const component = this.renderRouter({
          ...route,
          layout: route.layout || defaultLayout,
          routeStrategy: route.routeStrategy || defaultRouteStrategy,
        });

        return component;
      });
    }
  }

  getRouteComponets() {
    return this.routeComponets;
  }
}

export default RouteMap;
