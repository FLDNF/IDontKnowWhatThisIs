export type routeStrategyType = {
  authenticate: () => Boolean | Promise<Boolean>;
  unAuthRedirect: string;
};

export default class RouteStrategy<routeStrategyType> {
  authenticate() {
    return true;
  }
}
