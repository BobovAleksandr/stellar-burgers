import { combineReducers } from '@reduxjs/toolkit';
import ingredientsSliceReducer from './slices/ingredientsSlice';
import constructorSliceRrducer from './slices/constructorSlice';
import feedsSliceRrducer from './slices/feedsSlice';

const rootReducer = combineReducers({
  ingredientsState: ingredientsSliceReducer,
  constructorState: constructorSliceRrducer,
  feedsState: feedsSliceRrducer
});

export default rootReducer;
