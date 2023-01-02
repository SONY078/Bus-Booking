import { combineReducers, legacy_createStore } from 'redux'
import buses from '../Reducers/Bus';
import search from '../Reducers/BusSearch'
import details from '../Reducers/Details'
const reducers = combineReducers({search,buses,details});
export const store = legacy_createStore(reducers);