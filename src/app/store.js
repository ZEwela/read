import { configureStore } from '@reduxjs/toolkit';
import categoriesSliceReducer from '../containers/categories/CategoriesSlice';
import cardsSliceReducer from '../containers/cards/CardsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    cards: cardsSliceReducer
  },
});

