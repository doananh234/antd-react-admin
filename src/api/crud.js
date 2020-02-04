import { get, post, put, del, getQueryString } from './utils';

export async function getAllApi(resource, data) {
  return get(`/${resource}/list`, data);
}

export async function getByIdApi(resource, id, data) {
  return get(`/${resource}/${id}`, data);
}

export async function delApi(resource, id) {
  if (id) {
    return del(`/${resource}/${id}`);
  }
  return del(`/${resource}`);
}

export async function postApi(resource, data) {
  return post(`/${resource}`, data);
}

export async function putApi(resource, id, data) {
  return put(`/${resource}/${id}`, data);
}

export async function exportExcelApi(resource, data) {
  return get(`/${resource}/exportExcel`, data);
}

export const exportExcel = (resource, query) => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `${
      process.env.REACT_APP_SERVER_URL
    }api/v1/${resource}/exportExcel?${getQueryString(query)}`,
  );
  request.setRequestHeader(
    'Authorization',
    localStorage.getItem('sessionToken'),
  );
  request.responseType = 'arraybuffer';
  request.onload = () => {
    if (request.status === 200) {
      // Try to find out the filename from the content disposition `filename` value
      const disposition = request.getResponseHeader('Content-Disposition');
      const matches = disposition.substring(
        disposition.indexOf('filename=') + 9,
        disposition.length,
      );
      const filename =
        matches != null && matches !== '' ? matches : `${resource}.xlsx`;
      // The actual download
      const blob = new Blob([request.response], {
        type: request.getResponseHeader('content-type'),
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  request.send();
};
