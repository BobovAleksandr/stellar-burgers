import {
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  TLoginData,
  TRegisterData
} from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUser } from '@utils-types';
import { deleteCookie, setCookie } from '../../utils/cookie';

type userState = {
  isUserCheckInProgress: boolean;
  user: TUser | null;
};

const initialState: userState = {
  isUserCheckInProgress: false,
  // user: { name: '12321', email: '321321312' },
  user: null
};

export const fetchRegisterUser = createAsyncThunk(
  'user/fetchRegisterUser',
  async (data: TRegisterData) => registerUserApi(data)
);

export const fetchGetUser = createAsyncThunk('user/fetchGetUser', async () =>
  getUserApi()
);

export const fetchLogoutUser = createAsyncThunk(
  'user/fetchLogoutUser',
  async () => logoutApi()
);

export const fetchLoginUser = createAsyncThunk(
  'user/fetchLoginUser',
  async (data: TLoginData) => loginUserApi(data)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.isUserCheckInProgress = true;
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        state.isUserCheckInProgress = false;
      })
      .addCase(fetchRegisterUser.rejected, (state) => {
        state.isUserCheckInProgress = false;
        console.log('Ошика регистрации');
      })

      .addCase(fetchGetUser.pending, (state) => {
        state.isUserCheckInProgress = true;
      })
      .addCase(fetchGetUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isUserCheckInProgress = false;
      })
      .addCase(fetchGetUser.rejected, (state) => {
        state.isUserCheckInProgress = false;
        console.log('Пользователь не авторизован');
      })

      .addCase(fetchLogoutUser.pending, (state) => {
        state.isUserCheckInProgress = true;
      })
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        state.user = null;
        state.isUserCheckInProgress = false;
        localStorage.removeItem('refreshToken');
        deleteCookie('accessToken');
      })
      .addCase(fetchLogoutUser.rejected, (state) => {
        state.isUserCheckInProgress = false;
        console.log('Не удалось выйти из профиля');
      })

      .addCase(fetchLoginUser.pending, (state) => {
        state.isUserCheckInProgress = true;
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isUserCheckInProgress = false;
        setCookie('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
      })
      .addCase(fetchLoginUser.rejected, (state) => {
        state.isUserCheckInProgress = false;
        console.log('Не удалось войти в профиль');
      });
  }
});

export default userSlice;
