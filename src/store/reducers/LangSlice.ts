import { createSlice } from '@reduxjs/toolkit';
import { Russian, English } from '../../data';

type LangState = {
  langState: 'en' | 'ru';
};

const initialState = {
  langState: 'RU',
  langData: Russian,
};

export const langSlice = createSlice({
  name: 'translation',
  initialState: initialState,
  reducers: {
    changeLangToRus: (state) => {
      state.langState = 'RU';
      state.langData = Russian;
    },
    changeLangToEng: (state) => {
      state.langState = 'EN';
      state.langData = English;
    },
  },
});

export const { changeLangToRus, changeLangToEng } = langSlice.actions;

export default langSlice.reducer;
