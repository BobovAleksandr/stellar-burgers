import { combineSlices } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredientsSlice';
import consctructorSlice from './slices/constructorSlice';
import feedsSlice from './slices/feedsSlice';
import userSlice from './slices/userSlice';
import orderSlice from './slices/orderSlice';

const rootReducer = combineSlices(
  ingredientsSlice,
  consctructorSlice,
  feedsSlice,
  userSlice,
  orderSlice
);

export default rootReducer;

// TODO типизировать везде payload'ы
