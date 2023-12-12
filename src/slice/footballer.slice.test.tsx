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
      const mockFootballer = { name: 'elias' } as unknown as Footballer;

      const action = {
        type: 'load/pending',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballerInitialState).toBe('loading');
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the loadFootballer method and its rejected', () => {
    test('Then the state should be error', () => {
      const mockFootballer = { name: 'elias' } as unknown as Footballer;

      const action = {
        type: 'load/rejected',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballerInitialState).toBe('error');
    });
  });
});
