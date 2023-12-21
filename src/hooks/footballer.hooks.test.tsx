import { Provider, useDispatch } from 'react-redux';
import { useFootballer } from './footballer.hooks';
import { Footballer } from '../models/footballers';
import { render, screen } from '@testing-library/react';
import { RootState, store } from '../store/store';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
  useSelector: jest
    .fn()
    .mockReturnValue((state: RootState) => state.footballerState)
    .mockReturnValue({
      selectedValue: '',
    }),
}));

const footballerMock = {} as unknown as Footballer;
const footballerMockCreate = { name: 'Serafin' } as unknown as FormData;
const footballerIdMock = '';

const mockEvent = {
  preventDefault: jest.fn(),
  target: { value: 'test' },
} as unknown as React.SyntheticEvent;

describe('Given useFootballer...', () => {
  const TestComponent = () => {
    const {
      loadFootballer,
      handleDetailsPage,
      createFootballer,
      deleteFootballer,
      updateFootbaler,
      handleFilterFootballer,
    } = useFootballer();

    return (
      <>
        <button onClick={() => loadFootballer()}></button>
        <button onClick={() => handleDetailsPage(footballerMock)}></button>
        <button onClick={() => createFootballer(footballerMockCreate)}></button>
        <button onClick={() => deleteFootballer(footballerIdMock)}></button>
        <button
          onClick={() =>
            updateFootbaler(footballerIdMock, footballerMockCreate)
          }
        ></button>
        <button onClick={() => handleFilterFootballer(mockEvent)}></button>
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
  describe('When we click the button deleteFootballer', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[3]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
  describe('When we click the button updateFootballer', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[4]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
  describe('When we click the button handleFilterFootballer', () => {
    test('Then the dispacht should have be called...', async () => {
      await userEvent.click(elements[5]);
      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});

describe('Given loadFootballer', () => {
  jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
    useSelector: jest
      .fn()
      .mockReturnValue((state: RootState) => state.footballerState)
      .mockReturnValue({
        selectedValue: 'test',
      }),
  }));
  const TestComponent = () => {
    const { loadFootballer } = useFootballer();
    return <button onClick={() => loadFootballer()}></button>;
  };
  let elementss: HTMLElement[];
  beforeEach(() => {
    render(<TestComponent></TestComponent>);
    elementss = screen.getAllByRole('button');
  });
  test('Then the dispatch should have been called with filterFootballerThunk', async () => {
    await userEvent.click(elementss[0]);
    expect(useDispatch).toHaveBeenCalled();
  });
});
