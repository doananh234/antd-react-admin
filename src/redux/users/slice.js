import { makeCRUDSlice } from '../crudCreator/slice';

export const RESOURCE = 'users';
const usersSlice = makeCRUDSlice(RESOURCE);

export const { actions, reducer } = usersSlice;

export default reducer;
