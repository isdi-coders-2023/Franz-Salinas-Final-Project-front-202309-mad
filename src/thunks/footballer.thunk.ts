import { createAsyncThunk } from '@reduxjs/toolkit';
import { Footballer } from '../models/footballers';
import { FootballerRepo } from '../services/footballer.repo';

export const loadFootballersThunk = createAsyncThunk<
  Footballer[],
  FootballerRepo
>('footballer/load', async (repo) => {
  const footballers = await repo.getFootballers();
  return footballers;
});
