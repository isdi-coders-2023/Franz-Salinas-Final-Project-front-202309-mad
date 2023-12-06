import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../models/users';
import { logginUserThunk, logginWithTokenThunk } from '../thunks/thunks';
import { LoginResponse } from '../models/login.response';

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

  extraReducers: (builder) => {
    builder.addCase(
      logginUserThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );

    builder.addCase(logginUserThunk.pending, (state: UserState) => {
      state.logginState = 'logged';
    });
    builder.addCase(
      logginWithTokenThunk.fulfilled,
      (state: UserState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );
  },
});

export default usersSlice.reducer;

export const ac = usersSlice.actions;
