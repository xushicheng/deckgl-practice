import { combineReducers } from '@reduxjs/toolkit';

import { mapboxSlice } from './features/mapbox';

export const appReducer = combineReducers({
  [mapboxSlice.name]: mapboxSlice.reducer,
});
