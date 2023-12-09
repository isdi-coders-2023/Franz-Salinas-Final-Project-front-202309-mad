import { render, screen } from '@testing-library/react';
import { LoginUser } from '../models/users';
import { useUsers } from './user.hooks';
import { userEvent } from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../store/store';
import { FootballerRepo } from '../services/footballer.repo';
import { StorageData } from '../services/store.data';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as FormData;

describe('Given useUsers hooks', () => {
  const TestComponent = () => {
    const { makeLogOut, register, login, loginWithToken } = useUsers();

    return (
      <>
        <button onClick={() => makeLogOut()}></button>

        <button onClick={() => login(mockLoginUser)}></button>
        <button onClick={() => loginWithToken()}></button>
        <button onClick={() => register(mockNewUser)}></button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <TestComponent></TestComponent>
      </Provider>
    );
    elements = screen.getAllByRole('button');
  });
  describe('When we click the button makeLogout', () => {
    test('Then  the dispacht should have been called...', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button login', () => {
    test('Then the dispacht should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button loginWithToken', () => {
    test('Then the dispacht should have been called', async () => {
      StorageData.prototype.get = jest.fn().mockReturnValue('test');

      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click button register ', () => {
    test('Then the dispacht should have been called', async () => {
      FootballerRepo.prototype.registerUser = jest.fn();

      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
