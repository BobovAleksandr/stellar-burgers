import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedsApi } from '@api';

type feedsState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
  error: string | null;
};

const initialState: feedsState = {
  orders: [],
  total: 0,
  totalToday: 0,
  error: ''
};

export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', async () =>
  getFeedsApi()
);

const feedsSlice = createSlice({
  name: 'feedsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.orders = [];
      })
      .addCase(fetchFeeds.fulfilled, (state, action) => {
        state.orders = action.payload.orders!;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.error = action.error.message!;
      });
  }
});

export default feedsSlice.reducer;
