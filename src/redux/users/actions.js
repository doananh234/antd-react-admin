import { makeActions } from 'redux/crudCreator/actions';

export const MODEL_NAME = 'users';
export const usersActions = makeActions(MODEL_NAME);

export const getAllUsers = usersActions.getAll;
export const editUsers = usersActions.edit;
export const createUsers = usersActions.create;
export const getByIdUsers = usersActions.getDataById;
