import { combineReducers } from 'redux';
import auth from './auth/slice';
import modal from './modal/slice';
// import here
import users from './users/slice';
import notifications from './notifications/slice';
import reference from './referenceData/slice';
import config from './config/slice';

export default () =>
  combineReducers({
    auth,
    modal,
    config,
    reference,
    // add reducer here
    users,
    notifications,
  });
