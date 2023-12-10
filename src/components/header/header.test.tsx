import { useUsers } from '../../hooks/user.hooks';
import '@testing-library/jest-dom';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { User } from '../../models/users';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: { name: 'juancho' },
  }),
}));

describe('Given Header component...', () => {
  describe('When the user is not logged', () => {
    (useUsers as jest.Mock).mockReturnValue({
      loggedUser: null,
      makeLogOut: jest.fn(),
    });

    render(
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    );

    test('Then it should be in the document the Login and the Register links...', () => {
      expect(screen.getByText('Login')).toBeInTheDocument();
      expect(screen.getByText('Register')).toBeInTheDocument();
    });
  });

  describe('When the user is logged', () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        loggedUser: {
          name: 'Elias',
        } as unknown as User,
        makeLogOut: jest.fn(),
      });

      render(
        <Router>
          <Provider store={store}>
            <Header></Header>
          </Provider>
        </Router>
      );
    });

    test('Then sould render the logged user avatar', () => {
      const avatarLogin = screen.getByRole('img');
      expect(avatarLogin).toBeInTheDocument();
    });
  });
});
