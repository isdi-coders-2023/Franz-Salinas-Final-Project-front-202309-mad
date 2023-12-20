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

export const filterFootballerThunk = createAsyncThunk(
  'filter',
  async ({ repo, query }: { repo: FootballerRepo; query: string }) => {
    const allFootballers = await repo.filterFootballer(query);
    if (query === '') {
      return allFootballers;
    } else {
      return allFootballers.filter(
        (footballer) => footballer.position === query
      );
    }
  }
);
