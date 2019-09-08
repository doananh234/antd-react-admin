import { createSelector } from 'reselect';
import { getFilterFromUrl } from '../../utils/tools';

export default class CRUDSelectors {
  constructor(resource) {
    this.resource = resource;
  }

  getRestByResourceData = state => state[this.resource];

  getRestData = state => state[this.resource];

  getDefaultValue = (state, props) =>
    props.location && !props.location.hash && props.location.hash !== '#'
      ? decodeURI(props.location.search.substring(1)).trim()
      : props.location.hash.match(`#${this.resource}/create?(.*)`)[1];

  getDefaultFromProps = (state, props) => props.defaultValue;

  getDataArr = createSelector(
    [this.getRestData],
    resources => {
      const { data, ids } = resources;
      return ids.map(id => data[id]);
    }
  );

  getTotal = createSelector(
    [this.getRestData],
    resources => {
      const { total } = resources;
      return total;
    }
  );

  getDefaultCreateData = createSelector(
    [this.getDefaultValue, this.getDefaultFromProps],
    (defaultValue, defaultValueFromProps) =>
      defaultValue !== '' ? getFilterFromUrl(defaultValue).filter : defaultValueFromProps || {}
  );

  getCurrentData = createSelector(
    [this.getRestData],
    (resources = {}) => {
      const { currentData } = resources;
      return currentData || {};
    }
  );

  enabledLoadMore = createSelector(
    [this.getRestData],
    resources => {
      const { page, loading, numberOfPages } = resources;
      return !loading && page < numberOfPages;
    }
  );

  getLoading = createSelector(
    [this.getRestData],
    (resources = { loading: false }) => {
      const { loading } = resources;
      return loading;
    }
  );

  getCreateLoading = createSelector(
    [this.getRestData],
    (resources = { createLoading: false }) => {
      const { createLoading } = resources;
      return createLoading;
    }
  );

  getError = createSelector(
    [this.getRestData],
    resources => {
      const { error } = resources;
      return error;
    }
  );

  getFilters = createSelector(
    [this.getRestData],
    resources => {
      const { limit, page, filter, total, orderBy, q } = resources;
      return { limit, page, filter, count: total, orderBy, q };
    }
  );
}

export const crudSelectors = new CRUDSelectors();
