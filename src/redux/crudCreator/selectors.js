import { createSelector } from 'reselect';
import { getFilterFromUrl } from '../../utils/tools';

const getRestData = (state, props) => state[props.resource];
const getDefaultValue = (state, props) => decodeURI(props.location.search.substring(1)).trim();

export const getDataArr = createSelector(
  [getRestData],
  resources => {
    const { data, ids } = resources;
    return ids.map(id => data[id]);
  }
);

export const getTotal = createSelector(
  [getRestData],
  resources => {
    const { total } = resources;
    return total;
  }
);

export const getDefaultCreateData = createSelector(
  [getDefaultValue],
  defaultValue => (defaultValue !== '' ? getFilterFromUrl(defaultValue).filter : {})
);

export const getCurrentData = createSelector(
  [getRestData],
  resources => {
    const { currentId, data } = resources;
    return (data && currentId && data[currentId]) || {};
  }
);

export const enabledLoadMore = createSelector(
  [getRestData],
  resources => {
    const { page, loading, numberOfPages } = resources;
    return !loading && page < numberOfPages;
  }
);

export const getLoading = createSelector(
  [getRestData],
  (resources = { loading: false }) => {
    const { loading } = resources;
    return loading;
  }
);

export const getError = createSelector(
  [getRestData],
  resources => {
    const { error } = resources;
    return error;
  }
);

export const getFilters = createSelector(
  [getRestData],
  resources => {
    const { limit, page, filter, total } = resources;
    return { limit, page, filter, count: total };
  }
);
