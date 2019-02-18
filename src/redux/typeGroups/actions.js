import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = 'typeGroups';
export const IGNORE_ACTIONS = [];
export const TypeGroupsTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS)
};
const CRUDTypeGroupsActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDTypeGroupsActions };
