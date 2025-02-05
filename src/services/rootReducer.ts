import { combineReducers } from '@reduxjs/toolkit';
import ingredientsSlice from './slices/ingredientsSlice';
import consctructorSlice from './slices/constructorSlice';
import feedsSlice from './slices/feedsSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
  [ingredientsSlice.name]: ingredientsSlice.reducer,
  [consctructorSlice.name]: consctructorSlice.reducer,
  [feedsSlice.name]: feedsSlice.reducer,
  [userSlice.name]: userSlice.reducer
});

export default rootReducer;
