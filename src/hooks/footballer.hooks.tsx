import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { setCurrentFootballer } from '../slice/footballer.slice';
import { useCallback, useMemo } from 'react';
import {
  createFootballerThunk,
  loadFootballersThunk,
} from '../thunks/footballer.thunk';
import { Footballer } from '../models/footballers';

export const useFootballer = () => {
  const dispacht = useDispatch<AppDispatch>();

  const { token } = useSelector((state: RootState) => state.usersState);

  const { footballers, footballerInitialState, currentFootballer } =
    useSelector((state: RootState) => state.footballerState);

  const repo = useMemo(() => new FootballerRepo(token), []);

  const loadFootballer = useCallback(async () => {
    dispacht(loadFootballersThunk(repo));
  }, [dispacht, repo]);

  const handleDetailsPage = async (footballer: Footballer) => {
    dispacht(setCurrentFootballer(footballer));
  };

  const createFootballer = async (newFootballer: FormData) => {
    try {
      dispacht(createFootballerThunk({ repo, newFootballer }));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    loadFootballer,
    handleDetailsPage,
    createFootballer,
    footballers,
    footballerInitialState,
    currentFootballer,
  };
};
