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
  describe('When we use the loadFootballer and its fulfilled or pending or rejected ', () => {
    test('Then the state should be idle', () => {
      const mockFootballer = { name: 'elias' } as unknown as Footballer;

      const action = {
        type: 'load/fulfilled',
        payload: mockFootballer,
      };

      const actionPending = {
        type: 'load/pending',
        payload: mockFootballer,
      };

      const actionRejected = {
        type: 'load/rejected',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballerInitialState).toBe('idle');
      const resultForPending = footballersReducer(state, actionPending);
      expect(resultForPending.footballerInitialState).toBe('loading');
      const resultForRejected = footballersReducer(state, actionRejected);
      expect(resultForRejected.footballerInitialState).toBe('error');
    });
  });
});
