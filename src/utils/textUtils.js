/* eslint-disable */
import moment from 'moment';
import i18next from 'i18next';
import { DISCOUNT_UNIT } from '../configs/localData/index';

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
  return text ? moment(text).format(' DD/MMM/YY') : moment().format(' DD/MMM/YY');
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
    replaceAll(upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()), ' ', '')
  );
};

export const formatMoney = (number = 0, n, x) => {
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
    .replace(new RegExp(re, 'g'), '$&,')} ${UNIT[unitRank]}`;
};

export const formatCheckinTime = (checkin, isComplete) => {
  return `${moment(checkin.startTime).format('hh:mmA')} - ${
    isComplete ? moment(checkin.endTime).format('hh:mmA') : 'now'
  }`;
};

export const getDailyStatus = record => {
  if (!record.checkins || !record.checkins[0]) {
    return {
      type: 'CHECK IN',
      text: i18next.t('button.checkin'),
      className: 'btnCheckin',
      timeStr: i18next.t('checkinStatus.waitingCheckin'),
      icon: 'ic-check-in',
    };
  }
  if (record.checkins && record.checkins[0] && !record.checkins[0].endTime) {
    return {
      type: 'CHECK OUT',
      text: i18next.t('button.checkout'),
      className: 'btnCheckout',
      timeStr: formatCheckinTime(record.checkins[0]),
      icon: 'ic-check-out',
    };
  }
  return {
    type: 'COMPLETE',
    text: i18next.t('button.complete'),
    className: 'btnDisable',
    timeStr: formatCheckinTime(record.checkins[0], true),
    icon: 'check-circle',
  };
};

export const formatDisCount = (unit, value) => {
  if (!unit) {
    return 'none';
  }
  const discountUtil = DISCOUNT_UNIT.find(data => data.value === unit);
  return formatMoney(value) + (discountUtil ? discountUtil.text : '');
};

export const getTotalValue = (list, valueKey) => {
  if (!list) return 0;
  let total = 0;
  list.forEach(e => {
    total += e[valueKey];
  });
  return formatMoney(total);
};
