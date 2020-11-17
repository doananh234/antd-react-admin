import {groupBy, values} from 'lodash';
import countries from './countries.json';
import cities from './world-cities_json.json';

export const COUNTRIES = values(countries.countries);
export const CITIES = groupBy(cities,'country');
