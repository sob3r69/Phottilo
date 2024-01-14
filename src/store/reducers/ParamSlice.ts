import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paramName: '',
};

export const paramSlice = createSlice({
  name: 'param',
  initialState: initialState,
  reducers: {
    changeParamNameTo: (state, action) => {
      state.paramName = action.payload;
    },
  },
});

export const { changeParamNameTo } = paramSlice.actions;

export default paramSlice.reducer;
