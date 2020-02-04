import { makeCRUDSlice } from '../crudCreator/slice';

export const RESOURCE = 'userTypes';
const schoolsSlice = makeCRUDSlice(RESOURCE);

export const { actions, reducer } = schoolsSlice;

export default reducer;
