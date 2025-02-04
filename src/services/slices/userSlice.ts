import { registerUserApi, TRegisterData } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { setCookie } from '../../utils/cookie';

type userState = {
  isAuthChecked: boolean;
  isAuthenticated: boolean;
  loginUserRequest: boolean;
  error: string;
  user: TUser | null;
};

const initialState: userState = {
  isAuthChecked: false,
  isAuthenticated: false,
  loginUserRequest: false,
  error: '',
  user: null
};

export const fetchRegisterUser = createAsyncThunk(
  'user/fetchRegisterUser',
  async (data: TRegisterData) => registerUserApi(data)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.loginUserRequest = true;
        state.error = '';
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loginUserRequest = false;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
        state.error = '';
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchRegisterUser.rejected, (state) => {
        state.error = 'Ошика регистрации, попробуйте еще раз';
      });
  }
});

export default userSlice.reducer;
