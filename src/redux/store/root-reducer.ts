import { combineReducers } from '@reduxjs/toolkit';
import { reducer as dataProjectReducer } from '../slices/data-project';


export const rootReducer = combineReducers({
  dataProject: dataProjectReducer
});
