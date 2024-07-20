import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './camper/slice';
import { filterReducer } from './filter/slice';

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filter: filterReducer,
  },
});

export { store };
