import { Provider } from 'react-redux';
import { useFootballer } from '../../hooks/footballer.hooks';
import { store } from '../../store/store';
import { List } from './list';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../hooks/footballer.hooks', () => ({
  useFootballer: jest.fn().mockReturnValue({
    footballers: [{ name: 'nitin' }, { name: 'seragin' }],
    loadFootballer: jest.fn(),
    footballerUpdateState: [{}],
  }),
}));
describe('Given List component...', () => {
  describe('When render the card component', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <List></List>
          </Provider>
        </BrowserRouter>
      );
    });
    test('Then the card should be on screen...', () => {
      const result = screen.getByText('My Players');
      expect(result).toBeInTheDocument();
    });

    test('the loadFootballer should have been called', () => {
      expect(useFootballer().loadFootballer).toHaveBeenCalled();
    });
  });
});
