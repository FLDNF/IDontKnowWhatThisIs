import { Api } from '../../Lib/Api';
import { ApiWorkspaceInterceptor } from '../workspace';
import DeviceStateInterceptor from '../../Lib/Api/interceptors/DeviceStateInterceptor';

const baseURL = process.env.REACT_APP_API_URL;
const config = {
  interceptor: {
    request: [ApiWorkspaceInterceptor, DeviceStateInterceptor],
    response: [],
  },
  cookieName: 'Leisure',
  headers: {
    Accept: 'application/json',
    Platform: 'web',
  },
};

export default new Api(baseURL, config);
