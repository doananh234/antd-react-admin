import { ConfigTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = {};

const getConfigSuccess = (state, { data }) => ({ ...state, ...data });
const getConfigFailure = (state, { error }) => ({ ...state, error });

export default makeReducerCreator(initialState, {
  [ConfigTypes.GET_CONFIG_SUCCESS]: getConfigSuccess,
  [ConfigTypes.GET_CONFIG_FAILURE]: getConfigFailure,
});
