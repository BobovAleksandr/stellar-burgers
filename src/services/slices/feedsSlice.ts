import { createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedsApi, getOrderByNumberApi } from '@api';

type feedsState = {
  orders: TOrder[];
  total: number;
  totalToday: number;
  error: string | null;
  selectedOrder: TOrder | null;
};

const initialState: feedsState = {
  orders: [],
  total: 0,
  totalToday: 0,
  error: '',
  selectedOrder: null
};

export const fetchFeeds = createAsyncThunk('feeds/fetchFeeds', async () =>
  getFeedsApi()
);

export const fetchOrderByNumber = createAsyncThunk(
  'feeds/fetchOrderByNumber',
  async (number: number) => getOrderByNumberApi(number)
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
        state.total = action.payload.total;
        state.totalToday = action.payload.totalToday;
        state.error = null;
      })
      .addCase(fetchFeeds.rejected, (state, action) => {
        state.error = action.error.message!;
      })

      .addCase(fetchOrderByNumber.pending, (state) => {
        state.selectedOrder = null;
      })
      .addCase(fetchOrderByNumber.fulfilled, (state, action) => {
        state.selectedOrder = action.payload.orders[0];
        state.error = null;
      })
      .addCase(fetchOrderByNumber.rejected, (state, action) => {
        state.selectedOrder = null;
        state.error = action.error.message!;
      });
  }
});

export default feedsSlice.reducer;
