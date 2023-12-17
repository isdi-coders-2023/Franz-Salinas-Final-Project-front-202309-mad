import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Footballer } from '../models/footballers';
import {
  createFootballerThunk,
  deleteFootballerThunk,
  filterFootballerThunk,
  loadFootballersThunk,
  updateFootballerThunk,
} from '../thunks/footballer.thunk';

export type FootballerState = {
  footballers: Footballer[];
  footballerInitialState: 'idle' | 'loading' | 'error';
  currentFootballer: Footballer | null;
  footballerUpdateState: 'idle' | 'loading';
  filteredFootballer: Footballer[];
  selectedValue: string;
};

const initialState: FootballerState = {
  footballers: [],
  footballerInitialState: 'idle',
  footballerUpdateState: 'idle',
  currentFootballer: null,
  filteredFootballer: [],
  selectedValue: '',
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

    setSelectedValue: (
      state: FootballerState,
      { payload }: PayloadAction<string>
    ) => {
      state.selectedValue = payload;
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

    builder.addCase(
      createFootballerThunk.fulfilled,
      (state: FootballerState, { payload }: PayloadAction<Footballer>) => {
        state.footballers.push(payload);
        return state;
      }
    );

    builder.addCase(
      deleteFootballerThunk.fulfilled,
      (
        state: FootballerState,
        { payload }: PayloadAction<Footballer['id']>
      ) => {
        state.footballers.splice(
          state.footballers.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );

    builder.addCase(
      updateFootballerThunk.fulfilled,
      (state: FootballerState, { payload }: PayloadAction<Footballer>) => {
        const findFootballer =
          state.footballers[
            state.footballers.findIndex((item) => item.id === payload.id)
          ];
        state.footballerUpdateState = 'idle';
        state.currentFootballer = findFootballer;
        return state;
      }
    );

    builder.addCase(updateFootballerThunk.pending, (state: FootballerState) => {
      state.footballerUpdateState = 'loading';
      return state;
    });

    builder.addCase(
      filterFootballerThunk.fulfilled,
      (state: FootballerState, { payload }: PayloadAction<Footballer[]>) => {
        state.footballers = payload;
        return state;
      }
    );
  },
});

export default footballerSlice.reducer;

export const { setCurrentFootballer, setSelectedValue } =
  footballerSlice.actions;
