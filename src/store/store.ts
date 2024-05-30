import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterReducer from './reducers/FilterSlice';
import paintReducer from './reducers/PaintSlice';
import cropReducer from './reducers/CropSlice';
import langSlice from './reducers/LangSlice';
import paramReducer from './reducers/ParamSlice';

const rootReducer = combineReducers({
  filterReducer,
  paintReducer,
  cropReducer,
  langSlice,
  paramReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
