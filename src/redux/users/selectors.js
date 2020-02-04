import CRUDSelectors from '../crudCreator/selectors';
import { RESOURCE } from './slice';

export const usersSelectors = new CRUDSelectors(RESOURCE);
