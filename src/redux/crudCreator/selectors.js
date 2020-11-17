import { createSelector } from 'reselect';
import { getFilterFromUrl } from '../../utils/tools';

export class CRUDSelectors {
  constructor(resource) {
    this.resource = resource;
  }

  getRestData = (state) => state[this.resource];

  getDefaultValue = (state, props) =>
    props.location && (!props.location.hash || props.location.hash === '#')
      ? decodeURI(props.location.search.substring(1)).trim()
      : props.location.hash.match(`#${this.resource}/create?(.*)`)?.[1];

  getDefaultFromProps = (state, props) => props.defaultValue;

  getDataArr = createSelector([this.getRestData], (resources) => {
    const { data, ids } = resources;
    return ids?.map((id) => data[id]);
  });

  getTotal = createSelector([this.getRestData], (resources) => {
    const { total } = resources;
    return total;
  });

  getDefaultCreateData = createSelector(
    [this.getDefaultValue, this.getDefaultFromProps],
    (defaultValue, defaultValueFromProps) =>
      defaultValue !== ''
        ? getFilterFromUrl(defaultValue).filter
        : defaultValueFromProps || {},
  );

  getCurrentData = createSelector([this.getRestData], (resources = {}) => {
    const { currentData } = resources;
    return currentData || {};
  });

  getLoadingCurrentRecord = createSelector(
    [this.getRestData],
    (resources = {}) => {
      const { currentId, itemLoadings } = resources;
      return itemLoadings[currentId];
    },
  );

  enabledLoadMore = createSelector([this.getRestData], (resources) => {
    const { offset, limit, loading, numberOfPages } = resources;
    return !loading && offset / limit + 1 < numberOfPages;
  });

  getLoading = createSelector(
    [this.getRestData],
    (resources = { loading: false }) => {
      const { loading } = resources;
      return loading;
    },
  );

  getCreateLoading = createSelector(
    [this.getRestData],
    (resources = { createLoading: false }) => {
      const { createLoading } = resources;
      return createLoading;
    },
  );

  getError = createSelector([this.getRestData], (resources) => {
    const { error } = resources;
    return error;
  });

  getFilters = createSelector([this.getRestData], (resources) => {
    const { limit, offset, filter, total, orderBy, q } = resources;
    return { limit, offset, filter, count: total, orderBy, q };
  });
}

export const crudSelectors = new CRUDSelectors();
