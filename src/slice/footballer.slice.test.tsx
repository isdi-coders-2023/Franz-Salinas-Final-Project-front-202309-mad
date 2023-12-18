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
  describe('When we use the setSelectedValue method', () => {
    test('Then the state should be the one in the payload...', () => {
      const mockFootballer = { value: 'CM' } as unknown as Footballer;

      const action = {
        type: 'footballer/setSelectedValue',
        payload: mockFootballer,
      };
      const state: FootballerState = {} as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.selectedValue).toBe(mockFootballer);
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

describe('Given footballeReducer ...', () => {
  describe('When we use the createFootballer and its fulfilled or pending or rejected ', () => {
    test('Then the state should be idle', () => {
      const mockFootballer = {
        id: '1',
        name: 'elias',
      } as unknown as Footballer;

      const action = {
        type: 'create/fulfilled',
        payload: mockFootballer,
      };

      const state: FootballerState = {
        footballers: [],
      } as unknown as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballers).toEqual([mockFootballer]);
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the deleteFootballer and its fulfilled', () => {
    test('Then the state should be idle', () => {
      const mockFootballer = [] as unknown as Footballer['id'];

      const action = {
        type: 'delete/fulfilled',
        payload: mockFootballer,
      };

      const state: FootballerState = {
        footballers: [],
      } as unknown as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballers).toEqual(mockFootballer);
    });
  });
});

describe('Given footballeReducer ...', () => {
  describe('When we use the updateFootballer and its fulfilled or pending', () => {
    test('Then the state should be idle', () => {
      const mockFootballer = [] as unknown as Footballer['id'];

      const action = {
        type: 'update/fulfilled',
        payload: mockFootballer,
      };

      const actionPending = {
        type: 'update/pending',
        payload: mockFootballer,
      };

      const state: FootballerState = {
        footballers: [],
      } as unknown as FootballerState;
      const result = footballersReducer(state, action);
      expect(result.footballers).toEqual(mockFootballer);
      const resultPending = footballersReducer(state, actionPending);
      expect(resultPending.footballers).toEqual(mockFootballer);
    });
  });
});
