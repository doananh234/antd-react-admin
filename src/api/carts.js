import { put, post } from './utils';

export async function updateToCartApi(id, data) {
  return put(`/carts/${id}`, data);
}

export async function addToCartApi(data) {
  return post(`/carts`, data);
}

export async function applyPromoCodeApi(data) {
  return post(`/carts/apply-code`, data);
}

export async function getShippingMethodApi(data) {
  return put(`/carts/shipping-method`, data);
}

export async function checkoutApi(data) {
  return post(`/carts/checkout`, data);
}
