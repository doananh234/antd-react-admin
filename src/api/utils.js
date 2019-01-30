const checkIfErrorOccurs = res => ({
  code: res.status,
  res,
});

const TIME_OUT = 10000;

async function customFetch(path, headerOptions) {
  const normalFetch = fetch(path, headerOptions);
  const res = await timeoutPromise(
    TIME_OUT,
    normalFetch.then(checkIfErrorOccurs).catch(checkIfErrorOccurs)
  );

  if (!res.code) {
    const error = {
      code: 404,
      message: 'Fail to fetch',
    };
    throw error;
  }

  if (res.code < 300) {
    const response = await res.res.json();
    return response;
  }
  try {
    const response = await res.res.json();
    const error = {
      code: res.code,
      ...response,
    };
    throw error;
  } catch (e) {
    if (res.code === 426) {
      const error = {
        code: res.code,
        message:
          'We have had some significant upgrades for the app. Please click below to upgrade your app!',
      };
      throw error;
    } else {
      const error = {
        code: res.code,
        message: e.error || e.message ? e.message || e.error : 'Something wrong. Please try again.',
      };
      throw error;
    }
  }
}

export const timeoutPromise = (ms, promise) =>
  new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Request time out! Please try again.'));
    }, ms);
    promise.then(
      res => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      err => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });

export default customFetch;

function requestWrapper(method) {
  return async function(url, data = null, params = {}) {
    let convertUrl = process.env.REACT_APP_SERVER_URL + url;
    let convertParams = params;
    let convertData = data;
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      convertParams = convertData;
      if (convertParams !== null) {
        convertUrl = `${convertUrl}?${getQueryString(convertParams)}`;
      }
      convertData = null;
    } else if (convertData === Object(convertData)) {
      convertData = JSON.stringify(convertData);
    }

    // default params for fetch = method + (Content-Type)
    const defaults = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    // check that req url is relative and request was sent to our domain
    const token = localStorage.getItem('sessionToken');
    if (token) {
      defaults.headers.authorization = `Bearer ${token}`;
    }

    if (method === 'POST' || method === 'PUT') {
      defaults.headers.Accept = 'application/json';
      defaults.headers['Content-Type'] = 'application/json';
    }

    if (convertData) {
      defaults.body = convertData;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers },
    };
    return customFetch(convertUrl, paramsObj);
  };
}

function getQueryString(params) {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');
