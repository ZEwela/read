import { configureStore } from '@reduxjs/toolkit';
import categoriesSliceReducer from '../containers/categories/CategoriesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer
  },
});

