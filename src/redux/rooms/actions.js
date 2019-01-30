import { makeCRUDConstantCreator, makeCRUDActionsCreator } from '../crudCreator/actions';

export const MODEL = 'rooms';
export const IGNORE_ACTIONS = [];
export const RoomsTypes = {
  ...makeCRUDConstantCreator(MODEL, IGNORE_ACTIONS),
};
const CRUDRoomsActions = makeCRUDActionsCreator(MODEL, IGNORE_ACTIONS);
/**
 * getAllBloodDonations({pageSize, page })
 * getByIdBloodDonations(data)
 * createBloodDonations(data)
 * deleteBloodDonations()
 * editBloodDonations(data)
 */
export default { ...CRUDRoomsActions };
