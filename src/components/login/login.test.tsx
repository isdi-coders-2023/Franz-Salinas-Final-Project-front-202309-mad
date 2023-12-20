import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { useUsers } from '../../hooks/user.hooks';
import { store } from '../../store/store';
import { Login } from './login';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    login: jest.fn(),
  }),
}));

describe('Given Login component...', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <Login></Login>
        </Provider>
      </Router>
    );
  });

  describe('When we the user submits the form ', () => {
    test('Then the funtion login should be called...', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      await userEvent.type(input[0], 'nitin@gmail.com');
      await userEvent.click(screen.getByTestId('login'));
      await fireEvent.submit(form);
      expect(useUsers().login).toHaveBeenCalled();
    });
  });
});
