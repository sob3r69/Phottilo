import { createSlice } from '@reduxjs/toolkit';

type FilterState = {
  blur: number;
  brightness: number;
  contrast: number;
  noise: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

const initialState: FilterState = {
  blur: 0,
  brightness: 0,
  contrast: 0,
  noise: 0,
  red: 0,
  green: 0,
  blue: 0,
  alpha: 0,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    changeBlurByAmount: (state, action) => {
      state.blur = action.payload;
    },
    changeBrightByAmount: (state, action) => {
      state.brightness = action.payload;
    },
    changeContrastByAmount: (state, action) => {
      state.contrast = action.payload;
    },
    changeNoiseByAmount: (state, action) => {
      state.noise = action.payload;
    },
    changeRedByAmount: (state, action) => {
      state.red = action.payload;
    },
    changeGreenByAmount: (state, action) => {
      state.green = action.payload;
    },
    changeBlueByAmount: (state, action) => {
      state.blue = action.payload;
    },
    changeAlphaByAmount: (state, action) => {
      state.alpha = action.payload;
    },
  },
});

export const {
  changeBlurByAmount,
  changeBrightByAmount,
  changeContrastByAmount,
  changeNoiseByAmount,
  changeRedByAmount,
  changeGreenByAmount,
  changeBlueByAmount,
  changeAlphaByAmount,
} = filtersSlice.actions;

export default filtersSlice.reducer;
