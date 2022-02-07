import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { appReducer } from '@/app/reducer';

const makeStore = () =>
  configureStore({
    reducer: appReducer
  });

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  AppState,
  unknown,
  Action<string>>

export const useAppDispatch = () => useDispatch<ReturnType<AppStore["dispatch"]>>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
