import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './auth/slice';
import modal from './modal/slice';
// import here
import userTypes from './userTypes/slice';
import users from './users/slice';
import reference from './referenceData/slice';
import config from './config/slice';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    modal,
    config,
    reference,
    users,
    // add reducer here
    userTypes,
  });
