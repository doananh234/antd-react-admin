import { put } from './utils';

export async function getRelatedProductsApi(id) {
  return put(`/products/${id}/related`);
}
