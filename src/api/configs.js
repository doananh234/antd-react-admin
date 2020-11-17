import { get, post, put } from './utils';

export async function getConfigApi() {
  return get(`/app/config`);
}

export async function getSummariesApi() {
  return get('/dashboards');
}

export async function getRevenueApi(data) {
  return put('/revenue', data);
}

export async function getGlobalSaleApi() {
  return get('/global-sales');
}

export async function getSummariesCustomersApi() {
  return get('/summaries-customers');
}
export async function getPopularProductApi() {
  return get('/popular-product');
}

export async function getPreview(data) {
  return post(`/preview`, data);
}

export async function crawlerPage(data) {
  return post(`/crawlerPage`, data);
}
