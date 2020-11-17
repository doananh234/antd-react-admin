import { makeCRUDSlice } from 'redux/crudCreator';
import { MODEL_NAME, usersActions } from './actions';

const slice = makeCRUDSlice(MODEL_NAME, usersActions);

export default slice.reducer;
