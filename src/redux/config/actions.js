import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const ConfigTypes = makeConstantCreator(
  'GET_CONFIG',
  'GET_CONFIG_SUCCESS',
  'GET_CONFIG_FAILURE'
);

export const getConfig = data => makeActionCreator(ConfigTypes.GET_CONFIG, { data });
export const getConfigSuccess = data => makeActionCreator(ConfigTypes.GET_CONFIG_SUCCESS, { data });
export const getConfigFailure = error =>
  makeActionCreator(ConfigTypes.GET_CONFIG_FAILURE, { error });
