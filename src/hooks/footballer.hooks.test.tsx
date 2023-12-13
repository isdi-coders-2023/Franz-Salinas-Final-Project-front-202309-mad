import { Provider, useDispatch } from 'react-redux';
import { useFootballer } from './footballer.hooks';
import { Footballer } from '../models/footballers';
import { render, screen } from '@testing-library/react';
import { store } from '../store/store';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given useFootballer...', () => {
  const TestComponent = () => {
    const { loadFootballer, handleDetailsPage, createFootballer } =
      useFootballer();
    const footballerMock = { name: 'Serafin' } as unknown as Footballer;
    const footballerMockCreate = { name: 'Serafin' } as unknown as FormData;
    return (
      <>
        <button onClick={() => loadFootballer()}></button>
        <button onClick={() => handleDetailsPage(footballerMock)}></button>
        <button onClick={() => createFootballer(footballerMockCreate)}></button>
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

  describe('When we click the button loadFootballer', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });

  describe('When we click the button handleDetailsPage', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
  describe('When we click the button createFootballer', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
