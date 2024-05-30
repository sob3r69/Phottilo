import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paramName: '',
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState: initialState,
  reducers: {
    changeModeNameTo: (state, action) => {
      state.paramName = action.payload;
    },
  },
});

export const { changeModeNameTo } = modeSlice.actions;

export default modeSlice.reducer;
