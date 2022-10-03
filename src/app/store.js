import { configureStore } from '@reduxjs/toolkit';
import categoriesSliceReducer from '../containers/categories/CategoriesSlice';
import cardsSliceReducer from '../containers/cards/CardsSlice';
import commentsSliceReducer from '../containers/comments/CommentsSlice';
import searchSliceReducer from '../components/SearchBarSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSliceReducer,
    cards: cardsSliceReducer,
    comments: commentsSliceReducer,
    search: searchSliceReducer
  },
});

