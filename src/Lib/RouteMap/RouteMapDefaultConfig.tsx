import * as React from 'react';

import { ConfigType } from './RouteMapTypes';
import RouteStrategy from '~/app/route/RouteStrategy';

const config: ConfigType = {
  defaultLayout: (props: any) => <div {...props} />,
  defaultRouteStrategy: new RouteStrategy(),
};

export default config;
