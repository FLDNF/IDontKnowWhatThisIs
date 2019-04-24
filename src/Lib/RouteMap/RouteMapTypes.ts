import * as React from 'react';
import { RouteProps } from 'react-router-dom';

import { routeStrategyType } from '~/app/route/RouteStrategy';

export interface RoutePropsType extends RouteProps {
  auth?: boolean;
  layout?: React.ComponentType;
  routeStrategy?: routeStrategyType;
}

export type ConfigType = {
  defaultLayout?: React.ComponentType;
  defaultRouteStrategy?: routeStrategyType;
};
