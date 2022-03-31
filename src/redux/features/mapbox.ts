import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '..';

type SliceState = {
  mapIsLoaded: boolean;
};

const initialState: SliceState = {
  mapIsLoaded: false,
};

const name = 'mapbox';
export const mapboxSlice = createSlice({
  name,
  initialState,
  reducers: {
    setLoaded: (state, action: PayloadAction<boolean>) => {
      state.mapIsLoaded = action.payload;
    },
  },
});

export const { setLoaded } = mapboxSlice.actions;

export const mapboxSelector = (state: AppState) => state[name];
