import usersReducer, { UserState } from './user.slice';

describe('Given usersReducer...', () => {
  describe('When we use the method logout', () => {
    test('Then the state should be null...', () => {
      const action = { type: 'users/logout' };
      const state: UserState = {} as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe('');
    });
  });

  describe('When we use the method login and its fullfiled', () => {
    test('Then the state should be logged...', () => {
      const action = {
        type: 'login/fulfilled',
        payload: { token: '123', user: 'test' },
      };
      const state: UserState = {} as unknown as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('test');
      expect(result.token).toBe('123');
    });
  });

  describe('When we use the method login and its pending', () => {
    test('Then the state should be...', () => {
      const action = {
        type: 'login/pending',
      };
      const state: UserState = {} as unknown as UserState;
      const result = usersReducer(state, action);
      expect(result.logginState).toBe('logged');
    });
  });

  describe('When we use the method login and its rejected', () => {
    test('Then the state should be...', () => {
      const action = {
        type: 'login/rejected',
      };
      const state: UserState = {} as unknown as UserState;
      const result = usersReducer(state, action);
      expect(result.logginState).toBe('error');
    });
  });

  describe('When we use the method loginWithToken and its fullilled', () => {
    test('Then the state should be...', () => {
      const action = {
        type: 'loginUserWithToken/fulfilled',
        payload: { token: '123', user: 'alfredo' },
      };
      const state: UserState = {} as unknown as UserState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('alfredo');
      expect(result.token).toBe('123');
    });
  });
});
