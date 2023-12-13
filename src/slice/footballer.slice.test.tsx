import { Footballer } from '../models/footballers';
import footballersReducer, { FootballerState } from './footballer.slice';

describe('Given footballeReducer ...', () => {
  describe('When we use the setCurrenFootballer method', () => {
    test('Then the state should be the one in the payload...', () => {
      const mockFootballer = { name: 'elias' } as unknown as Footballer;

      const action = {
        type: 'footballer/setCurrentFootballer',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.currentFootballer).toBe(mockFootballer);
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the loadFootballer and its fulfilled ', () => {
    test('Then the state should be idle', () => {
      const mockFootballer = { name: 'elias' } as unknown as Footballer;

      const action = {
        type: 'load/fulfilled',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballerInitialState).toBe('idle');
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the loadFootballer method and its pending', () => {
    test('Then the state should be loading', () => {
      const mockFootballerPending = { name: 'elias' } as unknown as Footballer;

      const actionPending = {
        type: 'load/pending',
        payload: mockFootballerPending,
      };
      const stateForPending: FootballerState = {} as FootballerState;
      const resultForPending = footballersReducer(
        stateForPending,
        actionPending
      );
      expect(resultForPending.footballerInitialState).toBe('loading');
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the loadFootballer method and its rejected', () => {
    test('Then the state should be error', () => {
      const mockFootballerRejected = { name: 'elias' } as unknown as Footballer;

      const actionRejected = {
        type: 'load/rejected',
        payload: mockFootballerRejected,
      };
      const stateForRejected: FootballerState = {} as FootballerState;
      const resultForRejected = footballersReducer(
        stateForRejected,
        actionRejected
      );
      expect(resultForRejected.footballerInitialState).toBe('error');
    });
  });
});
