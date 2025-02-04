import { combineReducers } from '@reduxjs/toolkit';
import ingredientsSliceReducer from './slices/ingredientsSlice';
import constructorSliceRrducer from './slices/constructorSlice';
import feedsSliceRrducer from './slices/feedsSlice';
import userSliceRrducer from './slices/userSlice';

const rootReducer = combineReducers({
  ingredientsState: ingredientsSliceReducer,
  constructorState: constructorSliceRrducer,
  feedsState: feedsSliceRrducer,
  userState: userSliceRrducer
});

export default rootReducer;
