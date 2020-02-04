import { createSelector } from 'reselect';

const getRawConfigName = (state, name) => state.config[name];

export const getConfigByName = createSelector(
  [getRawConfigName],
  config => config || [],
);
