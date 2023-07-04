import { createSlice } from '@reduxjs/toolkit';

type PaintState = {
  eraser: {
    size: number;
  };
  brush: {
    size: number;
    tension: number;
    gapLength: number;
    gap: number;
    red: number;
    green: number;
    blue: number;
    alpha: number;
  };
};

const initialState: PaintState = {
  eraser: {
    size: 1,
  },
  brush: {
    size: 1,
    tension: 0.5,
    gapLength: 0,
    gap: 1,
    red: 1,
    green: 1,
    blue: 1,
    alpha: 0,
  },
};

export const paintSlice = createSlice({
  name: 'paint',
  initialState: initialState,
  reducers: {
    changeESizeByAmount: (state, action) => {
      state.eraser.size = action.payload;
    },
    changeBSizeByAmount: (state, action) => {
      state.brush.size = action.payload;
    },
    changeBGapLenByAmount: (state, action) => {
      state.brush.gapLength = action.payload;
    },
    changeBGapByAmount: (state, action) => {
      state.brush.gap = action.payload;
    },
    changeBRedByAmount: (state, action) => {
      state.brush.red = action.payload;
    },
    changeBGreenByAmount: (state, action) => {
      state.brush.green = action.payload;
    },
    changeBBlueByAmount: (state, action) => {
      state.brush.blue = action.payload;
    },
  },
});

export const {
  changeBBlueByAmount,
  changeBGapByAmount,
  changeBGapLenByAmount,
  changeBGreenByAmount,
  changeBRedByAmount,
  changeBSizeByAmount,
  changeESizeByAmount,
} = paintSlice.actions;

export default paintSlice.reducer;
