import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { setCurrentFootballer } from '../slice/footballer.slice';
import { useCallback, useMemo } from 'react';

import {
  createFootballerThunk,
  deleteFootballerThunk,
  loadFootballersThunk,
  updateFootballerThunk,
} from '../thunks/footballer.thunk';
import { Footballer } from '../models/footballers';

export const useFootballer = () => {
  const dispacht = useDispatch<AppDispatch>();

  const { token } = useSelector((state: RootState) => state.usersState);

  const {
    footballers,
    footballerInitialState,
    currentFootballer,
    footballerUpdateState,
  } = useSelector((state: RootState) => state.footballerState);

  const repo = useMemo(() => new FootballerRepo(token), []);

  const loadFootballer = useCallback(async () => {
    dispacht(loadFootballersThunk(repo));
  }, [dispacht, repo]);

  const handleDetailsPage = async (footballer: Footballer) => {
    dispacht(setCurrentFootballer(footballer));
  };

  const createFootballer = async (newFootballer: FormData) => {
    dispacht(createFootballerThunk({ repo, newFootballer }));
  };

  const deleteFootballer = async (footballerId: Footballer['id']) => {
    dispacht(deleteFootballerThunk({ footballerId, repo }));
  };

  const updateFootbaler = async (
    footballerId: Footballer['id'],
    updateFootballer: FormData
  ) => {
    try {
      dispacht(updateFootballerThunk({ footballerId, repo, updateFootballer }));
    } catch (error) {
      error as Error;
    }
  };

  return {
    loadFootballer,
    handleDetailsPage,
    createFootballer,
    deleteFootballer,
    updateFootbaler,
    footballers,
    footballerInitialState,
    currentFootballer,
    footballerUpdateState,
  };
};
