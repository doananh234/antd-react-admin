import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { auth } from './auth/reducer';
import modal from './modal/reducer';
import rooms from './rooms/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    modal,
    rooms,
  });
