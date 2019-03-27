import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/reducer';
import modal from './modal/reducer';
// import here
import companies from './companies/reducer';
import clients from './clients/reducer';
import activityTypes from './activityTypes/reducer';
import titles from './titles/reducer';
import departments from './departments/reducer';
import statuses from './statuses/reducer';
import projects from './projects/reducer';
import users from './users/reducer';
import productTypes from './productTypes/reducer';
import reference from './referenceData/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    modal,
    // add reducer here
    companies,
    clients,
    activityTypes,
    titles,
    departments,
    statuses,
    projects,
    users,
    productTypes,
    reference,
  });
