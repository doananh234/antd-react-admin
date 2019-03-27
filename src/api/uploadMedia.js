import { post } from './utils';

export async function getUrl(key, type) {
  return post('/signedUrlS3', { key, type });
}

export async function uploadMedia(url, data) {
  return fetch(url, {
    method: 'PUT',
    body: data,
  }).then(() => url.substring(0, url.indexOf('?')));
}
