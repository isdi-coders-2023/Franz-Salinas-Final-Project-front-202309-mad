import { Provider } from 'react-redux';
import { useFootballer } from '../../hooks/footballer.hooks';
import { render, screen } from '@testing-library/react';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';
import { Filter } from './filter';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest
    .fn()
    .mockReturnValue({ handleFilterFootballer: jest.fn() }),
}));

describe('Given Filter component ...', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Filter></Filter>
        </Provider>
      </BrowserRouter>
    );
  });

  describe('When we ', () => {
    test('Then it should be...', async () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
      await userEvent.selectOptions(element, 'CM');
      expect(useFootballer().handleFilterFootballer).toHaveBeenCalled();
    });
  });
});
