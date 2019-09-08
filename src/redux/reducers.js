import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/reducer';
import modal from './modal/reducer';
// import here
import customers from './customers/reducer';

import users from './users/reducer';
import reference from './referenceData/reducer';
import config from './config/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    modal,
    config,
    reference,
    users,
    // add reducer here
    customers,
  });
