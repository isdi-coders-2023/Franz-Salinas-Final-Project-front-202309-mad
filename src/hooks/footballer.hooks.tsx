import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { setCurrentFootballer } from '../slice/footballer.slice';
import { useCallback, useMemo } from 'react';
import { loadFootballersThunk } from '../thunks/footballer.thunk';
import { Footballer } from '../models/footballers';

export const useFootballer = () => {
  const dispacht = useDispatch<AppDispatch>();
  const repo = useMemo(() => new FootballerRepo(), []);

  const { footballers, footballerInitialState } = useSelector(
    (state: RootState) => state.footballerState
  );

  const loadFootballer = useCallback(async () => {
    dispacht(loadFootballersThunk(repo));
  }, [dispacht, repo]);

  const handleDetailsPage = async (footballer: Footballer) => {
    dispacht(setCurrentFootballer(footballer));
  };

  return {
    loadFootballer,
    handleDetailsPage,
    footballers,
    footballerInitialState,
  };
};
