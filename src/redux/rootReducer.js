import { combineReducers } from 'redux';
import globalReducer from './global/reducer';

export const reducer = combineReducers({
  global: globalReducer
});
