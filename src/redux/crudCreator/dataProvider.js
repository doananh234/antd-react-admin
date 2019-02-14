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
  };
  switch (type) {
    case 'GET_ALL':
      return {
        ...formatedParams,
        filter: JSON.stringify(getValidData(formatedParams.filter)),
      };
    case 'GET_BY_ID':
      break;
    case 'DELETE':
    case 'EDIT':
    case 'CREATE':
    default:
      return {};
  }
  return {};
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
    case 'EDIT':
    case 'CREATE':
      return response && response.id ? { ...response } : null;
    case 'DELETE':
    default:
      return response;
  }
};
