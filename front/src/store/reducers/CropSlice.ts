import { createSlice } from '@reduxjs/toolkit';

type CropState = {
  cropState: boolean;
};

const initialState: CropState = {
  cropState: false,
};

export const cropSlice = createSlice({
  name: 'crop',
  initialState: initialState,
  reducers: {
    changeCropState: (state) => {
      state.cropState = !state.cropState;
    },
  },
});

export const { changeCropState } = cropSlice.actions;

export default cropSlice.reducer;
