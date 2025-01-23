import { authAddress } from '../config/address';
import { requestBase } from '../utils/requestBase';
export const auth = {
  register: (params) => requestBase.post(authAddress.signup, params),
  login: (params) => requestBase.post(authAddress.login, params),
};
