import { combineReducers } from '@reduxjs/toolkit';

import { globalSlice, } from './models';

export const appReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
});
