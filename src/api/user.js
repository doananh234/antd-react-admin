import { post, get, put, del } from './utils';

export async function loginApi(params) {
  return post('/auth/login', params);
}

export async function logoutApi() {
  return post('/auth/logout');
}

export async function getCurrentUserApi(filter) {
  return get('/auth/me', filter);
}

export async function updateCurrentUserApi(data) {
  return put('/auth/me', data);
}

export async function createInstallationApi(params) {
  return post('/installations', params);
}

export async function updateInstallationApi(id, params) {
  return put(`/installations/${id}`, params);
}

export async function deleteInstallationApi(id) {
  return del(`/installations/${id}`);
}
