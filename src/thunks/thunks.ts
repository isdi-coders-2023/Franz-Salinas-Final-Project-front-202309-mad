import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../models/login.response';
import { StorageData } from '../services/store.data';
import { FootballerRepo } from '../services/footballer.repo';
import { LoginUser } from '../models/users';

export const logginUserThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: FootballerRepo;
    storageData: StorageData<{ token: string }>;
  }
>('login', async ({ loginUser, repo, storageData }) => {
  const loginResponse = await repo.loginUser(loginUser);
  storageData.set({ token: loginResponse.token });
  return loginResponse;
});

export const logginWithTokenThunk = createAsyncThunk<
  LoginResponse,
  {
    token: string;
    repo: FootballerRepo;
    storageData: StorageData<{ token: string }>;
  }
>('loginUserWithToken', async ({ token, repo, storageData }) => {
  const loginResponse = await repo.loginUserWithToken(token);
  storageData.set({ token: loginResponse.token });
  return loginResponse;
});
