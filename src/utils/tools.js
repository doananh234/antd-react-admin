/* eslint-disable */
import { omitBy, reduce, isEmpty, keyBy } from 'lodash';

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const sortByProps = (list, props) => {
  if (!list) return [];
  const newList = list.sort((a, b) => {
    if (!a || !b) return -1;
    if (this.change_alias(a[props]) < this.change_alias(b[props])) {
      return -1;
    }
    if (this.change_alias(a[props]) > this.change_alias(b[props])) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return newList;
};

export const upperCaseFirstChart = str => str[0].toUpperCase() + str.substring(1);

export const changeAlias = alias => {
  let str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ {2}|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ {2}|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
    '-',
  );
  str = str.replace(/-+-/g, '-');
  str = str.replace(/^\-+|\-+$/g, '');
  return str;
};

export const validateName = name => {
  const re = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
  return re.test(name);
};

export const getResourceTitle = string => string.charAt(0).toUpperCase() + string.slice(1);

export const formatFormData = (originalData, data) => {
  const newData = {};
  Object.keys(data).forEach(key => {
    newData[key] = formatData(data[key], typeof originalData[key]);
  });
  return newData;
};

export const formatData = (data, type) => {
  switch (type) {
    case 'number':
      return Number(data);
    default:
      return data;
  }
};

export const getMatchFromPath = string => {
  const re = '(\\/)((?:[a-z][a-z0-9_]*))(\\/)((?:[a-z][a-z0-9_]*))';
  const p = new RegExp(re, ['i']);
  const m = p.exec(string);
  return m && m.length > 0 ? m[0] : string;
};

export const getSearch = filter => {
  const params = {
    limit: filter.limit,
    page: filter.page,
    q: filter.q,
    orderBy: filter.orderBy,
    ...getValidData(filter.filter),
  };

  return convertObjToSearchStr(params);
};

export const convertObjToSearchStr = params =>
  Object.keys(params)
    .map(key =>
      params[key]
        ? `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(params[key]))}`
        : '',
    )
    .filter(data => data !== '')
    .join('&');

const getValidDataOfObj = (obj, isFilter) => {
  const validData = reduce(
    obj,
    (result, value, key) => {
      if (Array.isArray(value)) {
        return value.length > 0 ? { ...result, [key]: value } : result;
      }
      if (typeof value === 'object' && !isEmpty(value)) {
        const formatChildValue = getValidDataOfObj(value);
        return !isEmpty(formatChildValue) ? { ...result, [key]: formatChildValue } : result;
      }

      if (value || value === false || value === 0) {
        // eslint-disable-next-line
        result[key] = value;
        return { ...result, [key]: value };
      }

      if (value === '' && !isFilter) {
        // eslint-disable-next-line
        result[key] = ' ';
      }
      return result;
    },
    {},
  );
  return validData;
};

export const getValidData = (filter, isFilter) => getValidDataOfObj(filter, isFilter);

export const getFilterFromUrl = searchStr => {
  const parsed = {};
  if (!searchStr || searchStr.trim() === '') return {};
  decodeURIComponent(searchStr)
    .trim()
    .substring(1)
    .split('&')
    .forEach(text => {
      const keyValue = text.split('=');
      parsed[keyValue[0]] = keyValue[1];
      try {
        parsed[keyValue[0]] = JSON.parse(parsed[keyValue[0]]);
      } catch (error) {
        parsed[keyValue[0]] = parsed[keyValue[0]];
      }
    });
  const filter = { q: parsed.q, orderBy: parsed.orderBy, limit: parsed.limit, page: parsed.page };
  delete parsed.limit;
  delete parsed.page;
  delete parsed.orderBy;
  delete parsed.q;
  filter.filter = parsed;
  return filter;
};

export const getRecordData = (record, source) => {
  const arrKeys = source ? replaceAll(replaceAll(source, '\\[', '.'), '\\]', '').split('.') : [];
  let data = record;
  arrKeys.forEach(key => {
    data = data ? data[key] : data;
  });
  return data;
};

export const convertDataToObj = (formatOnSubmit, record) => {
  const newRecord = {};
  Object.keys(record).forEach(key => {
    newRecord[key] = formatOnSubmit[key]
      ? { ...record[key], ...formatOnSubmit[key](record[key]) }
      : record[key];
  });
  // const arrKeys = source.split('.');
  // let data = record;
  // arrKeys.forEach((key, index) => {
  //   if (index === arrKeys.index - 1) {
  //     data[key] = value;
  //   } else {
  //     data = data[key];
  //   }
  // });
  return newRecord;
};

export const replaceAll = function(str, search, replacement) {
  return str.replace(new RegExp(search, 'g'), replacement);
};

export const formattedRESTData = data => ({
  data: keyBy(data, 'id'),
  ids: data.map(item => item.id),
});

export const getIdByUrl = props => {
  const idFromPath =
    props.location.pathname.match(`${props.resource}/(.*)/edit`) ||
    props.location.pathname.match(`${props.resource}/(.*)/show`);
  const idFromHash =
    props.location.hash.match(`#${props.resource}/(.*)/edit`) ||
    props.location.hash.match(`#${props.resource}/(.*)`);
  return (idFromPath && idFromPath[1]) || (idFromHash && idFromHash[1]);
};

export const getPrefixPath = (props, action) =>
  `${
    props.redirects[action] === 'modal'
      ? `${props.location.pathname}${props.location.search}#`
      : props.rootPath
  }/${props.resource}`;

export const onSearch = (data, keySearch) =>
  data && data.toLowerCase().search(keySearch.toLowerCase()) !== -1;

export const formattedData = list => ({
  data: keyBy(list, 'id'),
  ids: list.map(data => data.id),
});

export const makeBreadCrumbFromPath = location => {
  const BREADCRUMB_LIST = [];
  const paths = location.pathname.split('/');
  paths.forEach(data => {
    if (data === '') return;
    BREADCRUMB_LIST.push({
      title: data,
      path: `${
        BREADCRUMB_LIST.length ? BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].path : ''
      }/${data}`,
    });
  });
  return BREADCRUMB_LIST;
};

export const reorderOffset = (
  boards,
  prevOrder,
  { sourceId, destinationId, sourceIndex, destinationIndex },
) => {
  const newBoards = { ...boards };
  if (sourceId === destinationId) {
    newBoards[sourceId] = reorder(boards[sourceId], sourceIndex, destinationIndex);
  } else {
    const moveResults = move(boards, sourceId, destinationId, sourceIndex, destinationIndex);
    newBoards[sourceId] = moveResults[sourceId];
    newBoards[destinationId] = moveResults[destinationId];
  }
  return { boards: newBoards, prevOrder: {} };
};

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (boards, sourceId, destinationId, sourceIndex, destinationIndex) => {
  const sourceClone = Array.from(boards[sourceId]);
  const destClone = Array.from(boards[destinationId]);
  const [removed] = sourceClone.splice(sourceIndex, 1);

  destClone.splice(destinationIndex, 0, removed);

  const result = {};
  result[sourceId] = sourceClone;
  result[destinationId] = destClone;

  return result;
};
