import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const PRIMARY_KEY = 'id';
export const MODEL = 'productTypes';
export const IGNORE_ACTIONS = [];
export const ProductTypesTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS)
};
const CRUDProductTypesActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllCaseTypes({pageSize, page })
 * getByIdCaseTypes(data)
 * createCaseTypes(data)
 * deleteCaseTypes()
 * editCaseTypes(data)
 */
export default { ...CRUDProductTypesActions };
