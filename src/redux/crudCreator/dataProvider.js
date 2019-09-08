import { keyBy } from 'lodash';
import { PRIMARY_KEY } from './actions';
import { getValidData } from '../../utils/tools';

export const convertRequestParams = (
  type,
  params
  // resource
  // options = { primaryKey: PRIMARY_KEY }
) => {
  const formatedParams = {
    ...params,
    page: undefined,
    count: undefined,
  };
  const filter = getValidData(formatedParams.filter);
  switch (type) {
    case 'GET_ALL':
      return {
        ...formatedParams,
        filter: Object.keys(filter).length > 0 ? JSON.stringify(filter) : undefined,
      };
    case 'GET_BY_ID':
      return {
        ...params,
        [PRIMARY_KEY]: Number(params[PRIMARY_KEY]),
      };
    case 'EDIT':
      delete formatedParams.id;
      return getValidData(formatedParams);
    case 'CREATE':
      return getValidData(formatedParams);
    case 'DELETE':
    default:
      return {};
  }
};

export const convertResponseData = (type, response, options = { primaryKey: PRIMARY_KEY }) => {
  switch (type) {
    case 'GET_ALL':
      return {
        data: keyBy(
          response.results.map(data => ({
            ...data,
            [PRIMARY_KEY]: data[options.primaryKey || PRIMARY_KEY],
            backupId: data[PRIMARY_KEY],
          })),
          options.primaryKey || PRIMARY_KEY
        ),
        ids: response.results.map(data => data[options.primaryKey || PRIMARY_KEY]),
        total: response.total,
      };
    case 'GET_BY_ID':
    case 'CREATE':
      return response && response.id
        ? { ...response, [PRIMARY_KEY]: response[options.primaryKey || PRIMARY_KEY] }
        : null;
    case 'EDIT':
      return response && response.id ? { ...response } : null;
    case 'DELETE':
    default:
      return response;
  }
};
