export const convertParamsToObject = url => {
  const vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    vars[key] = value;
  });
  return vars;
};

// convertParamsToObject('?a=1&b=2') => { a: '1' , b:'2'}
