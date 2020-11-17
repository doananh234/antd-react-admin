import axios from 'axios';
import { post } from './utils';
// import { post } from './utils';

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
  }).then((res) => res.json());
}

export async function uploadImages(data, onUploadProgress) {
  try {
    const res = await axios.request({
      method: 'post',
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/file/uploadImages`,
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
      },
      data,
      onUploadProgress: (p) => {
        onUploadProgress &&
          onUploadProgress(Number((p.loaded / p.total) * 100).toFixed(2));
      },
    });
    return res.data.map((e) => ({
      ...e,
      image: process.env.REACT_APP_DRIVER_HOST + e.image,
      previewImage:
        process.env.REACT_APP_DRIVER_THUMBNAIL_HOST + e.previewImage,
    }));
  } catch (error) {
    return error;
  }
}
