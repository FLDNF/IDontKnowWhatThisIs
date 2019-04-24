import RouteStrategy from './RouteStrategy';

export default class LoginRouteStrategy extends RouteStrategy {
  unAuthRedirect = '/login';

  authenticate(): Boolean | Promise<Boolean> {
    return true;
  }
}
