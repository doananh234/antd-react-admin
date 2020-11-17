import { get } from './utils';

export async function getNotificationCountApi() {
  return get('/notifications/count');
}
