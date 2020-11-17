import { createSelector } from 'reselect';
import { unionBy } from 'lodash';
import { getRecordData } from 'utils/tools';

const getRawReferenceResource = (state, props) =>
  state.reference[props.resource];
const getRawResource = (state, props) => state[props.resource];
const getRawReferenceLoading = (state, props) =>
  state.reference[props.resource];
const getReferenceDataSource = (state, props) =>
  getRecordData(props.record, props.source);
const getRawReferenceByResourceName = (state, resource) =>
  state.reference[resource];

export const getReferenceResource = createSelector(
  [getRawReferenceResource, getRawResource],
  (references = { data: {}, ids: [] }, resources = { data: {}, ids: [] }) => {
    const { data, ids } = references;
    const formattedIds = unionBy(ids, resources.ids);
    const formattedData = { ...data, ...resources.data };
    return formattedIds.map((id) => formattedData[id]);
  },
);

export const getReferenceArr = createSelector(
  [getRawReferenceResource],
  (resources = { data: {}, ids: [] }) => {
    const { data, ids } = resources;
    return ids.map((id) => data[id]);
  },
);

export const getReferenceArrByResourceName = createSelector(
  [getRawReferenceByResourceName],
  (resources = { data: {}, ids: [] }) => {
    const { data, ids } = resources;
    return ids.map((id) => data[id]);
  },
);
export const getReferenceLoading = createSelector(
  [getRawReferenceLoading],
  (resources = { loading: false }) => {
    const { loading } = resources;
    return loading;
  },
);

export const getReferenceData = createSelector(
  [getRawReferenceResource, getReferenceDataSource],
  (resources = { data: {}, ids: [] }, dataSource) => {
    const { data } = resources;
    return Array.isArray(dataSource)
      ? dataSource.map((id) => data[id])
      : data[`${dataSource}`];
  },
);

export const getTotalReference = createSelector(
  [getRawReferenceResource],
  (resources = { total: 0 }) => {
    const { total } = resources;
    return total;
  },
);

export const getEnabledLoadMoreReference = createSelector(
  [getRawReferenceResource],
  (resources = { total: 0 }) => {
    const { page, loading, numberOfPages } = resources;
    return !loading && page <= numberOfPages;
  },
);
