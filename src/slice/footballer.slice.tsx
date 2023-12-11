import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Footballer } from '../models/footballers';
import { loadFootballersThunk } from '../thunks/footballer.thunk';

type FootballerState = {
  footballers: Footballer[];
  footballerInitialState: 'idle' | 'loading' | 'error';
  currentFootballer: Footballer | null;
};

const initialState: FootballerState = {
  footballers: [],
  footballerInitialState: 'idle',
  currentFootballer: null,
};

const footballerSlice = createSlice({
  name: 'footballer',
  initialState,
  reducers: {
    setCurrentFootballer: (
      state: FootballerState,
      { payload }: PayloadAction<Footballer | null>
    ) => {
      state.currentFootballer = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      loadFootballersThunk.fulfilled,
      (state: FootballerState, { payload }: PayloadAction<Footballer[]>) => {
        state.footballers = payload;
        state.footballerInitialState = 'idle';
        return state;
      }
    );

    builder.addCase(loadFootballersThunk.pending, (state: FootballerState) => {
      state.footballerInitialState = 'loading';
      return state;
    });

    builder.addCase(loadFootballersThunk.rejected, (state: FootballerState) => {
      state.footballerInitialState = 'error';
    });
  },
});

export default footballerSlice.reducer;

export const { setCurrentFootballer } = footballerSlice.actions;
