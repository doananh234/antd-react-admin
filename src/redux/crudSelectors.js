import crudActions from './crudActions';
import { CRUDSelectors } from './crudCreator/selectors';

const models = Object.keys(crudActions);

const crudSelectors = {};
models.forEach((name) => {
  crudSelectors[name] = new CRUDSelectors(name);
});

export default crudSelectors;
