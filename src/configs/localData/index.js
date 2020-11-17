import { uniqBy } from 'lodash';
import { FallOutlined, RiseOutlined } from '@ant-design/icons';
import theme from '../theme/index';
import commonJobs from './commonJobs';
import nationalities from './nationalities';

export const ORDER_STATUSES = [
  {
    value: 'new_deal',
    color: '#e16551',
    textColor: '#fff',
  },
  {
    value: 'designer_confirm',
    color: '#9163b6',
    textColor: '#fff',
  },
  {
    value: 'design_in_progress',
    color: '#ead78d',
    textColor: '#000',
  },
  {
    value: 'verified',
    color: '#4285F4',
    textColor: '#fff',
  },
  {
    value: 'delivery',
    color: '#a34974',
    textColor: '#fff',
  },
  {
    value: 'waiting_approved',
    color: '#f19670',
    textColor: '#000',
  },
  {
    value: 'waiting_a_file',
    color: '#F4B400',
    textColor: '#000',
  },
  {
    value: 'feedback',
    color: '#4e2472',
    textColor: '#fff',
  },
  {
    value: 'done',
    color: '#0F9D58',
    textColor: '#fff',
  },
  {
    value: 'canceled',
    color: '#c94953',
    textColor: '#fff',
  },
  {
    value: 'gua_pd',
    color: '#74c493',
    textColor: '#000',
  },
  {
    value: 'pre_order',
    color: '#e4c07f',
    textColor: '#000',
  },
];

export const FORMAT_DATE = 'MMM DD, YYYY';

export const PERMISSION = [
  {
    value: 'PUT',
    text: 'permission.put',
  },
  {
    value: 'CREATE',
    text: 'permission.create',
  },
  {
    value: 'READ',
    text: 'permission.read',
  },
  {
    value: 'DELETE',
    text: 'permission.delete',
  },
  {
    value: 'ADDCLASS',
    text: 'permission.addClass',
  },
  {
    value: 'REMOVECLASS',
    text: 'permission.removeClass',
  },
  {
    value: 'GETLIST',
    text: 'permission.getList',
  },
  {
    value: 'LIST_PERMISSION',
    text: 'permission.listPermission',
  },
];

export const SEMESTERS = [
  {
    value: true,
    text: 'semesters.isDone',
    color: 'gray',
  },
  {
    value: false,
    text: 'semesters.notDone',
    color: 'green',
  },
];

export const CHART_LINES = [
  {
    value: 'sales',
    dataKey: 'sales',
    text: 'home.chart.sales',
    stroke: '#f83995',
    fillId: 'salesFillColor',
    fillColor: '#f83995',
  },
  {
    value: 'profit',
    dataKey: 'profit',
    text: 'home.chart.profit',
    stroke: '#4d79f6',
    fillId: 'profitFillColor',
    fillColor: '#4d79f6',
  },
];

export const COUNTRY = [
  {
    value: 'buenosAires',
    name: 'home.country.buenosAires',
    color: '#F93B7A',
  },
  {
    value: 'brasilia',
    name: 'home.country.brasilia',
    color: '#0AAFFF',
  },
  {
    value: 'santiago',
    name: 'home.country.santiago',
    color: '#FFC212',
  },
  {
    value: 'bogota',
    name: 'home.country.bogota',
    color: '#7551E9',
  },
];

export const FINANCES = [
  {
    value: 'tuition',
    text: 'finances.tuition',
  },
  {
    value: 'mealFee',
    text: 'finances.mealFee',
  },
  {
    value: 'subClass',
    text: 'finances.subClass',
  },
];

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

export const SUBJECTS = [
  {
    value: 'main',
    text: 'subjects.typeMain',
    color: '#56ac00',
  },
  {
    value: 'sub',
    text: 'subjects.typeSub',
    color: '#f8961d',
  },
];

export const STATUS = [
  {
    value: 'true',
    text: 'Active',
    color: theme.color.green,
  },
  {
    value: 'false',
    text: 'Inactive',
    color: theme.color.red,
  },
];

export const PAYMENT_STATUS = [
  {
    value: false,
    text: 'Not paid',
    textColor: theme.color.red,
    icon: 'close-circle',
  },
  {
    value: true,
    text: 'Paid',
    textColor: theme.color.green,
    icon: 'check-circle',
  },
];

export const QUOTE_STATUS = [
  {
    value: 'REJECTED',
    text: 'Rejected',
    color: theme.color.red,
    textColor: '#fff',
  },
  {
    value: 'ACCEPTED',
    text: 'Accepted',
    color: theme.color.green,
    textColor: '#fff',
  },
  {
    value: 'CANCELLED',
    text: 'Cancelled',
    color: theme.color.red,
    textColor: '#fff',
  },
];

export const ORDER_STATUS = [
  {
    value: 'OPEN',
    text: 'Open',
    color: theme.color.yellow,
    icon: 'folder-open',
    textColor: 'white',
  },
  {
    value: 'PROCESSING',
    text: 'Processing',
    color: theme.color.green,
    icon: 'interaction',
    textColor: 'white',
  },
  {
    value: 'ONDELIVERY',
    text: 'On Delivery',
    color: theme.color.green,
    icon: 'car',
    textColor: 'white',
  },
  {
    value: 'DELIVERED',
    text: 'Delivered',
    color: theme.color.blue,
    icon: 'home',
    textColor: 'white',
  },
  {
    value: 'COMPLETE',
    text: 'Complete',
    color: theme.color.blue,
    icon: 'check-circle',
    textColor: 'white',
  },
  {
    value: 'CANCELLED',
    text: 'Cancelled',
    color: theme.color.red,
    icon: 'close-circle',
    textColor: 'white',
  },
  {
    value: 'WAITING_FOR_QUOTE',
    text: 'Waiting for Quote',
    color: theme.color.orange,
    icon: 'check-circle',
    textColor: 'white',
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
    value: false,
    text: 'isActive.deactive',
    color: '#e64c38',
  },
  {
    id: 2,
    value: true,
    text: 'isActive.active',
    color: '#52c41a',
  },
];

export const DISABLE_TYPES = [
  {
    value: false,
    text: 'isDisabled.notDisabled',
  },
  {
    value: true,
    text: 'isDisabled.disabled',
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
    color: '#1890ff',
    icon: 'man',
  },
  {
    value: 'female',
    text: 'gender.female',
    color: '#eb2f96',
    icon: 'woman',
  },
  {
    value: 'other',
    text: 'gender.other',
    color: '#959595',
    icon: 'key',
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
export const DISCOUNT_UNIT = [
  { text: '%', value: 'percent' },
  { text: 'VND', value: 'number' },
];
export const PAYMENT_METHOD = [
  { text: 'payType.paymentByCash', value: 'cash' },
  { text: 'payType.paymentByBank', value: 'bank' },
];

export const NOTIFICATIONS = [
  {
    value: 'pharmacy',
    text: 'notifications.pharmacy',
    icon: 'ic-pharmacy',
  },
  {
    value: 'delivery',
    text: 'notifications.delivery',
    icon: 'ic-delivery',
  },
  {
    value: 'prepare',
    text: 'notifications.prepare',
    icon: 'ic-prepare',
  },
  {
    value: 'send',
    text: 'notifications.send',
    icon: 'ic-send',
  },
];

export const BILLING_UNIT = [
  { text: 'packages.hour', value: 'Hour' },
  { text: 'packages.month', value: 'Month' },
  { text: 'packages.week', value: 'Week' },
  { text: 'packages.day', value: 'Day' },
];

export const ROLE = [
  { text: 'role.superadmin', value: 'superadmin' },
  { text: 'role.admin', value: 'admin' },
  { text: 'role.pharmacist', value: 'user' },
];

export const JOBS = commonJobs;
export const NATIONALITIES = uniqBy(nationalities, 'nationality');

export const QUALIFICATIONS = [
  { text: 'qualifications.university', value: 'university' },
  { text: 'qualifications.colleges', value: 'colleges' },
];

export const OPEN_TIME = [
  {
    value: true,
    text: 'time.open',
    color: '#52c41a',
  },
  {
    value: false,
    text: 'time.closed',
    color: '#e64c38',
  },
];

export const SUMMARY_CARD_TYPES = [
  {
    value: 'up',
    text: 'summaryCard.up',
    icon: RiseOutlined,
    color: theme.color.green,
  },
  {
    value: 'down',
    text: 'summaryCard.down',
    icon: FallOutlined,
    color: theme.color.red,
  },
];

export const DETAIL_SUMMARY_CARD_TYPES = [
  {
    value: 'up',
    text: 'detailSummaryCard.up',
    icon: RiseOutlined,
    color: theme.color.green,
  },
  {
    value: 'down',
    text: 'detailSummaryCard.down',
    icon: FallOutlined,
    color: theme.color.red,
  },
];

export const SUMMARIES_CUSTOMER = [
  {
    dataKey: 'newCustomer',
    color: '#0088FE',
    text: 'customers.newCustomer',
  },
  {
    dataKey: 'repeatedCustomer',
    color: '#00C49F',
    text: 'customers.repeatedCustomer',
  },
];

export const CONTRACT_TYPES = [
  { text: 'contractTypes.official', value: 'official' },
  { text: 'contractTypes.partTime', value: 'partTime' },
];

export const RATINGS = [
  {
    value: '1',
    text: '1 Star',
  },
  {
    value: '2',
    text: '2 Star',
  },
  {
    value: '3',
    text: '3 Star',
  },
  {
    value: '4',
    text: '4 Star',
  },
  {
    value: '5',
    text: '5 Star',
  },
];

export const ARTICLES_STATUS = [
  { color: '#4cb1e8', text: 'articles.status.public', value: 'public' },
  { color: '#d1d1d1', text: 'articles.status.draft', value: 'draft' },
];

export const TEAMS = [
  { color: theme.color.blue, value: 'react', text: 'react' },
  { color: theme.color.red, value: 'angular', text: 'angular' },
  { color: theme.color.green, value: 'nodejs', text: 'nodejs' },
  { color: theme.color.blueShade, value: '.net', text: '.net' },
  { color: theme.color.blueShade, value: 'react-native', text: 'react-native' },
  { color: theme.color.yellow, value: 'marketing', text: 'marketing' },
  { color: theme.color.pink, value: 'design', text: 'design' },
];

export const ORDER_FEATURE = [
  { value: 'prioritize', text: 'Prioritize', color: '#ff2911' },
  { value: 'information', text: 'Information', color: '#38393a' },
  { value: 'basic', text: 'Basic', color: '#64bb55' },
  { value: 'medium', text: 'Medium', color: '#f1d42f' },
  { value: 'highClass', text: 'High-class', color: '#fd9e31' },
  { value: 'customerCare', text: 'Customer Care', color: '#59e69a' },
  { value: 'pr', text: 'PR', color: '#fd7bca' },
  { value: 'test', text: 'Test', color: '#d08cb5' },
];

export const LOCALES = [
  {
    text: 'Vietnamese',
    value: 'vi',
  },
  {
    text: 'English',
    value: 'en',
  },
  {
    text: 'zh-CN',
    value: 'zh-CN',
  },
  {
    text: 'zh-TW',
    value: 'zh-TW',
  },
];

export const ORIENTATION = [
  {
    text: 'Landscape',
    value: 'landscape',
  },
  {
    text: 'Portrait',
    value: 'portrait',
  },
  {
    text: 'Square',
    value: 'square',
  },
];

export const UNIT_SIZE = [
  {
    text: 'cm',
    value: 'cm',
  },
  {
    text: 'inch',
    value: 'inch',
  },
];

export const inchToCM = 2.54;

export const CONDITIONS = [
  {
    text: 'Excellent',
    value: 'excellent',
    color: '#108ee9',
  },
  {
    text: 'Good',
    value: 'good',
    color: '#87d068',
  },
  {
    text: 'Bad',
    value: 'bad',
    color: '#f50',
  },
];
