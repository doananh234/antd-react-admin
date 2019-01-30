import { keyBy } from 'lodash';
import { PRIMARY_KEY } from './actions';
import { getValidData } from '../../utils/tools';

export const convertRequestParams = (type, params, resource) => {
  console.log('resource', resource);
  delete params.page;
  switch (type) {
    case 'GET_ALL':
      return {
        ...params,
        filter: JSON.stringify(getValidData(params.filter)),
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

export const convertResponseData = (type, response) => {
  console.log('response', response);
  switch (type) {
    case 'GET_ALL':
      return {
        data: keyBy(response.results, PRIMARY_KEY),
        ids: response.results.map(data => data[PRIMARY_KEY]),
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
