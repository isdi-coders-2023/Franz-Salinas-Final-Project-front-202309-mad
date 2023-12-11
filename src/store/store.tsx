import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slice/user.slice';
import footballersReducer from '../slice/footballer.slice';

export const store = configureStore({
  reducer: {
    usersState: usersReducer,
    footballerState: footballersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
