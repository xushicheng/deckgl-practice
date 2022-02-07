import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '../store';

/**
 * 控制所有全局性的变量/状态, 驱动视图发生变化
 */
type SliceState = {
  // drawer遮罩的方式, 会遮罩地图, 地图保持不动
  drawerMaskVisible: boolean;
  // drawer推出的方式, 不会遮罩地图, 但会推着地图一起向左偏移
  drawerPushVisible: boolean;
  drawerWidth: string;
};
const name = '$$global';
const initialState: SliceState = {
  drawerMaskVisible: false,
  drawerPushVisible: false,
  drawerWidth: '25rem',
};

export const globalSlice = createSlice({
  name,
  initialState,
  reducers: {
    setDrawerShowWay: (state, action: PayloadAction<'Mask' | 'Push' | boolean>) => {
      // 如果 payload 为 string
      if (action.payload) {
        if (action.payload === 'Mask') {
          state.drawerMaskVisible = true;
          state.drawerPushVisible = false;
        } else if (action.payload === 'Push') {
          state.drawerMaskVisible = false;
          state.drawerPushVisible = true;
        }
      } else {
        // 如果 payload 为 boolean false
        state.drawerMaskVisible = false;
        state.drawerPushVisible = false;
      }
    },
  },
});

export const { setDrawerShowWay } = globalSlice.actions;

export const globalSelector = (state: AppState) => state[name];
