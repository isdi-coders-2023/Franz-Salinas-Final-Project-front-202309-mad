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

export const deleteFootballerThunk = createAsyncThunk<
  Footballer['id'],
  { repo: FootballerRepo; footballerId: Footballer['id'] }
>('delete', async ({ repo, footballerId }) => {
  await repo.deleteFootballer(footballerId);
  return footballerId;
});

/* export type ParasmsTwo = {
  repo: FootballerRepo;
  updateFootballer: FormData;
  footballerId: Footballer['id'];
}; */

export const updateFootballerThunk = createAsyncThunk<
  Footballer,
  {
    repo: FootballerRepo;
    footballerId: Footballer['id'];
    updateFootballer: FormData;
  }
>('update', async ({ repo, footballerId, updateFootballer }) => {
  const updatedFootballer = await repo.updateFootballer(
    footballerId,
    updateFootballer
  );
  return updatedFootballer;
});
