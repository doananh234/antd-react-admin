import { uniqBy } from 'lodash';
import theme from '../theme/index';
import commonJobs from './commonJobs';
import nationalities from './nationalities';

export const FORMAT_DATE = 'MMM DD, YYYY';

export const GENDER = [
  {
    value: 'male',
    text: 'gender.male',
  },
  {
    value: 'female',
    text: 'gender.female',
  },
];

export const STATUS = [
  {
    value: 'true',
    text: 'status.active',
    color: theme.color.green,
  },
  {
    value: 'false',
    text: 'status.inactive',
    color: theme.color.red,
  },
];

export const PRODUCT_STATUS = [
  {
    value: 'inprogress',
    text: 'status.inprogress',
    color: theme.color.green,
  },
  {
    value: 'pending',
    text: 'status.pending',
    color: theme.color.orange,
  },
  {
    value: 'completed',
    text: 'status.completed',
    color: theme.color.blue,
  },
  {
    value: 'developing',
    text: 'status.developing',
    color: theme.color.green,
  },
];

export const ACTIVITIES_LOG = [
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis vulputate justo ornare feugiat.',
  },
];

export const USER_STATUS = [
  {
    id: 1,
    data: 'true',
    text: {
      en: 'Locked',
      vi: 'Khoá',
    },
  },
  {
    id: 1,
    data: 'false',
    text: {
      en: 'Unlock',
      vi: 'Không Khoá',
    },
  },
];

export const MEMBER_STATUS = [
  {
    id: 1,
    data: 'false',
    text: {
      en: 'Locked',
      vi: 'Khoá',
    },
  },
  {
    id: 1,
    data: 'true',
    text: {
      en: 'Unlock',
      vi: 'Không Khoá',
    },
  },
];

export const ACTIVE_TYPES = [
  {
    id: 1,
    value: 'false',
    text: 'isActive.deactive',
  },
  {
    id: 2,
    value: 'true',
    text: 'isActive.active',
  },
];

export const MEMBER_ROLES = [
  {
    id: 1,
    text: {
      en: 'Admin',
      vi: 'Admin',
    },
  },
  {
    id: 2,
    text: {
      en: 'Staff',
      vi: 'Nhân viên',
    },
  },
  {
    id: 3,
    text: {
      en: 'Member',
      vi: 'Khách hàng',
    },
  },
];

export const LANGUAGES = [
  {
    id: 'en',
    text: {
      en: 'English',
      vi: 'Tiếng Anh',
    },
  },
  {
    id: 'vi',
    text: {
      en: 'Vietnamese',
      vi: 'Tiếng Việt',
    },
  },
];

export const GENDERS = [
  {
    value: 'male',
    text: 'gender.male',
  },
  {
    value: 'female',
    text: 'gender.female',
  },
  {
    value: 'other',
    text: 'gender.other',
  },
];

export const BOOKING_STATUS = [
  {
    id: 'INPROGRESS',
    value: 'INPROGRESS',
    text: 'status.inprogress',
    requestSuffixUrl: 'inprogress',
  },
  {
    id: 'COMPLETED',
    value: 'COMPLETED',
    text: 'status.completed',
    requestSuffixUrl: 'complete',
  },
  {
    id: 'CANCELLED',
    value: 'CANCELLED',
    text: 'status.cancelled',
    requestSuffixUrl: 'cancel',
  },
  { id: 'PENDING', value: 'PENDING', text: 'status.pending' },
];

export const HOME_TAB = [
  { id: 'todayBooking', title: 'Today' },
  { id: 'pendingBooking', title: 'Upcoming' },
];

export const MOMENT_CODE = {
  daily: 'd',
  hourly: 'h',
  weekly: 'w',
  monthly: 'M',
};

export const TRANSACTION_TYPE = [
  { value: 'INCOME', text: 'button.income' },
  { value: 'EXPENSE', text: 'button.expense' },
];

export const PACKAGE_TYPES_TIME_UNIT = {
  hourly: 'hour',
  daily: 'day',
  weekly: 'week',
  monthly: 'month',
};
export const BOOKINGS_TYPES = ['todayBooking', 'pendingBooking'];
export const CHECKIN_STATUS = [
  { text: 'checkinStatus.waitingCheckin', value: 'waitingCheckin' },
  { text: 'checkinStatus.waitingCheckout', value: 'waitingCheckout' },
  { text: 'checkinStatus.completed', value: 'completed' },
  { text: 'checkinStatus.all', value: 'all' },
  { text: 'checkinStatus.upcoming', value: 'upcoming' },
];
export const DISCOUNT_UNIT = [{ text: '%', value: 'percent' }, { text: 'VND', value: 'number' }];
export const PAYMENT_METHOD = [
  { text: 'payType.paymentByCash', value: 'cash' },
  { text: 'payType.paymentByBank', value: 'bank' },
];
export const PAYMENT_STATUS = [
  { text: 'bookings.paid', value: 'true' },
  { text: 'bookings.unpaid', value: 'false' },
];

export const BILLING_UNIT = [
  { text: 'packages.hour', value: 'Hour' },
  { text: 'packages.month', value: 'Month' },
  { text: 'packages.week', value: 'Week' },
  { text: 'packages.day', value: 'Day' },
];

export const ROLE = [
  { text: 'customers.role.admin', value: 'admin' },
  { text: 'customers.role.staff', value: 'staff' },
];

export const JOBS = commonJobs;
export const NATIONALITIES = uniqBy(nationalities, 'nationality');
