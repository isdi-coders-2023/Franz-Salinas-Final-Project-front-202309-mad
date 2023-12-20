import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import {
  setCurrentFootballer,
  setSelectedValue,
} from '../slice/footballer.slice';
import { SyntheticEvent, useCallback, useMemo } from 'react';

import {
  createFootballerThunk,
  deleteFootballerThunk,
  filterFootballerThunk,
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
    filteredFootballer,
    selectedValue,
  } = useSelector((state: RootState) => state.footballerState);

  const repo = useMemo(() => new FootballerRepo(token), []);

  const loadFootballer = useCallback(async () => {
    if (selectedValue === '') {
      dispacht(loadFootballersThunk(repo));
    } else {
      dispacht(filterFootballerThunk({ repo, query: selectedValue }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repo, selectedValue]);

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
    dispacht(updateFootballerThunk({ footballerId, repo, updateFootballer }));
  };

  const handleFilterFootballer = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLInputElement;
    const value = element.value;
    dispacht(setSelectedValue(value));
    dispacht(filterFootballerThunk({ repo, query: value }));
  };

  return {
    loadFootballer,
    handleDetailsPage,
    createFootballer,
    deleteFootballer,
    updateFootbaler,
    handleFilterFootballer,
    filteredFootballer,
    footballers,
    footballerInitialState,
    currentFootballer,
    footballerUpdateState,
  };
};
