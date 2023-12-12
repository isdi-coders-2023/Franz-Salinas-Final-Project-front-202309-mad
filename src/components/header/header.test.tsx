import '@testing-library/jest-dom';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import { Header, getHeaderColorClass } from './header';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { User } from '../../models/users';
import { useUsers } from '../../hooks/user.hooks';

describe('Given Header component...', () => {
  describe('When pathnmae is /', () => {
    let mockLocation: { pathname: string };

    beforeEach(() => {
      mockLocation = {
        pathname: '/',
      };

      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useLocation: jest.fn().mockReturnValue(mockLocation),
      }));
    });
    render(
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    );

    test('When pathname is /, Then Header class should be header-grey', () => {
      const pathname = '/';
      const headerClass = getHeaderColorClass(pathname);
      expect(headerClass).toBe('header-grey');
    });

    test('When pathname is /myplayers, Then Header class should be header-black', () => {
      const pathname = '/myplayers';
      const headerClass = getHeaderColorClass(pathname);
      expect(headerClass).toBe('header-black');
    });
    test('When pathname is /login, Then Header class should be header-black', () => {
      const pathname = '/login';
      const headerClass = getHeaderColorClass(pathname);
      expect(headerClass).toBe('header-black');
    });
    test('When pathname is /register, Then Header class should be header-black', () => {
      const pathname = '/register';
      const headerClass = getHeaderColorClass(pathname);
      expect(headerClass).toBe('header-black');
    });
  });
  describe('When the user is logged', () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        loggedUser: {
          name: 'TestName',
          avatar: { publicId: '1' },
        } as unknown as User,
        // makeLogout: jest.fn(),
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
      const avatarLogin = screen.getByAltText('User avatar');
      expect(avatarLogin).toBeInTheDocument();
    });
  });
});
