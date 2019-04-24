import * as React from 'react';

import { withRouter } from 'react-router';

import { routeStrategyType } from '~/app/route/RouteStrategy';

type PropType = {
  strategy: routeStrategyType;
  children: React.ReactNode;
};
type StateType = {
  verifyState: boolean;
};

export class AuthRouter extends React.Component<any, StateType> {
  defaultGotoRoute = '/';

  constructor(props: PropType) {
    super(props);

    this.state = {
      verifyState: false,
    };

    const { strategy } = this.props;
    Promise.resolve(strategy.authenticate()).then(this.onAuthenticateDone);
  }

  onAuthenticateDone = (verifyState: boolean) => {
    const { strategy, history } = this.props;
    const goToRoute = strategy.unAuthRedirect || this.defaultGotoRoute;

    if (verifyState) {
      this.setState({ verifyState });
    } else {
      history.push(goToRoute, { redirect: location.pathname });
    }
  };

  render() {
    const { children } = this.props;
    const { verifyState } = this.state;

    return verifyState ? children : null;
  }
}

export default withRouter(AuthRouter);
