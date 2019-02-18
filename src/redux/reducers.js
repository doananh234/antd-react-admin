import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/reducer';
import modal from './modal/reducer';
// import here
import productTypes from './productTypes/reducer';
import typeGroups from './typeGroups/reducer';
import caseTypes from './caseTypes/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    modal,
    // add reducer here
    productTypes,
    typeGroups,
    caseTypes,
  });
