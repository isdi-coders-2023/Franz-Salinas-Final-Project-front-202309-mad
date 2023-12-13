import { createAsyncThunk } from '@reduxjs/toolkit';
import { Footballer } from '../models/footballers';
import { FootballerRepo } from '../services/footballer.repo';

export const loadFootballersThunk = createAsyncThunk<
  Footballer[],
  FootballerRepo
>('load', async (repo) => {
  const footballers = await repo.getFootballers();
  return footballers;
});

export type Params = {
  repo: FootballerRepo;
  newFootballer: FormData;
};
export const createFootballerThunk = createAsyncThunk<Footballer, Params>(
  'create',
  async ({ repo, newFootballer }) => {
    const createFootballer = await repo.createFootballer(newFootballer);
    return createFootballer;
  }
);
