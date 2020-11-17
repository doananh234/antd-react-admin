import { keyBy } from 'lodash';
import { getValidData } from '../../utils/tools';

export const PRIMARY_KEY = 'id';

export const convertRequestParams = (
  type,
  params,
  // resource
  options = { primaryKey: PRIMARY_KEY },
) => {
  const { q, ...rest } = params.filter || { q: undefined };
  const formatedParams = {
    ...params,
    // ...omit(params, ['limit', 'offset']),
    filter: rest,
    // pageSize: params.limit,
    // pageNumber: params.offset / params.limit + 1,
    q,
    count: undefined,
  };
  const filter = getValidData(formatedParams.filter, true);
  switch (type) {
    case 'GET_ALL':
      return {
        ...formatedParams,
        filter:
          Object.keys(filter).length > 0 ? JSON.stringify(filter) : undefined,
      };
    case 'GET_BY_ID':
      return {
        ...params,
        [PRIMARY_KEY]: Number(params[PRIMARY_KEY]),
      };
    case 'EDIT':
      delete formatedParams.id;
      delete formatedParams.filter;
      delete formatedParams.q;
      delete formatedParams.count;

      return getValidData(formatedParams);
    case 'CREATE':
      return getValidData(formatedParams);
    case 'DELETE':
    default:
      return {};
  }
};

export const convertResponseData = (
  type,
  response,
  options = { primaryKey: PRIMARY_KEY },
) => {
  switch (type) {
    case 'GET_ALL':
      return {
        data: keyBy(
          response?.results.map((data) => ({
            ...data,
            id: data[options.primaryKey || PRIMARY_KEY],
            backupId: data[PRIMARY_KEY],
          })),
          options.primaryKey || PRIMARY_KEY,
        ),
        ids: response?.results.map(
          (data) => data[options.primaryKey || PRIMARY_KEY],
        ),
        total: response?.total,
      };
    case 'GET_BY_ID':
    case 'CREATE':
      return response
        ? {
            ...response,
            id: response[options.primaryKey || PRIMARY_KEY],
            backupId: response[PRIMARY_KEY],
          }
        : null;
    case 'EDIT':
      return response && response
        ? {
            ...response,
            id: response[options.primaryKey || PRIMARY_KEY],
            backupId: response[PRIMARY_KEY],
          }
        : null;
    case 'DELETE':
    default:
      return response;
  }
};
