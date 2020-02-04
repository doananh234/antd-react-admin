/* eslint-disable */
import moment from 'moment';
import i18next from 'i18next';

// export const formatUnixToDate = unit => moment.unix(unit).format();

export const upperFirstChar = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = text => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};
export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const formatDateTime = text => {
  return text ? moment(text).format('DD/MM/YY, hh:mma') : moment().format('DD/MM/YY, hh:mma');
};

export const formatDate = text => {
  return text ? moment(text).format(' DD/MMM/YYYY') : moment().format(' DD/MMM/YYYY');
};

export const formatTime = text => {
  return text ? moment(text).format('hh:mma') : moment().format('hh:mma');
};

export const encodeJsonToURI = params => {
  return Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const stringToSlug = e => {
  let str = e;
  str = unidecode(str).toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};
export const makeActionName = text => {
  return lowerFirstChar(
    replaceAll(upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()), ' ', ''),
  );
};

export const formatMoney = (number = 0, n, x, currency) => {
  const UNIT = ['', 'K', 'M'];
  let unitRank = 0;
  let tmpPrice = Math.abs(number);
  while (1) {
    tmpPrice = Number(tmpPrice) / 1000;
    unitRank += tmpPrice > 1 ? 1 : 0;
    if (tmpPrice < 1) break;
  }
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `${number >= 0 ? '' : '-'}${Number(tmpPrice * 1000)
    .toFixed(2)
    .replace(new RegExp(re, 'g'), '$&,')}${UNIT[unitRank]} ${currency}`;
};

export const inputNumberFormatter = () => {
  return {
    formatter: value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    parser: value => value.replace(/\$\s?|(,*)/g, ''),
    ruleType: 'number',
  };
};
