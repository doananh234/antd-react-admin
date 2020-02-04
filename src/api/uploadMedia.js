import { post } from './utils';

const CLIENT_ID = '50b73e2dc3f6fb5';

export async function getUrl(key, type) {
  return post('/signedUrlS3', { key, type });
}

export async function uploadMedia(url, data) {
  return fetch(url, {
    method: 'PUT',
    body: data,
  }).then(() => url.substring(0, url.indexOf('?')));
}

export async function uploadMediaImgur(data) {
  return fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
    body: data,
  }).then(res => res.json());
}
