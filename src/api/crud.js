import {
  get, post, put, del,
} from './utils';

export async function getAllApi(resource, data) {
  return get(`/${resource}`, data);
}

export async function getDataByIdApi(resource, id, data) {
  return get(`/${resource}/${id}`, data);
}

export async function delApi(resource, id) {
  if (id) {
    return del(`/${resource}/${id}`);
  }
  return del(`/${resource}`);
}

export async function postApi(resource, data) {
  return post(`/${resource}`, data);
}

export async function putApi(resource, id, data) {
  return put(`/${resource}/${id}`, data);
}
