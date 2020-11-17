import { get, put } from './utils';

export async function getNicheByIdApi(id) {
  return get(`/niches/${id}`);
}

export async function getOrderHistoryApi(id) {
  return get(`/orderHistories/orders/${id}`);
}

export async function acceptOrderHistoryApi(id, isAccept, data) {
  return put(`/orderHistories/${id}/isAccept/${isAccept}`, data);
}
export async function forceFeedbackApi(id, data) {
  return put(`/orderHistories/${id}/forceFeedback`, data);
}