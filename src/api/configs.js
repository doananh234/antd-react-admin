import { get } from './utils';

export async function getConfig() {
  return get(`/configs`);
}
