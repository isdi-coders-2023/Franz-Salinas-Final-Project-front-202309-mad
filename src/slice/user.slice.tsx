import { createSlice } from '@reduxjs/toolkit';
import { User } from '../models/users';

type LoginState = 'idle' | 'logged' | 'error';

export type UserState = {
  token: string;
  logginState: LoginState;
  loggedUser: User | null;
};

const initialState: UserState = {
  token: '',
  logginState: 'idle',
  loggedUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state: UserState) => {
      (state.loggedUser = null), (state.token = '');
      return state;
    },
  },
});

export const ac = usersSlice.actions;
