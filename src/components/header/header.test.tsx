import '@testing-library/jest-dom';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import { Header, getHeaderColorClass } from './header';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { useUsers } from '../../hooks/user.hooks';

jest.mock('../../hooks/user.hooks', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: { name: 'Nitin', avatar: { publicId: 'test' } },
  }),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
  }),
}));

describe('Given Header component...', () => {
  describe('When pathnmae is /', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={store}>
            <Header></Header>
          </Provider>
        </Router>
      );
    });

    test('When pathname is /, Then Header class should be header-grey', () => {
      const pathnameHome = '/';
      const headerClassHome = getHeaderColorClass(pathnameHome);
      expect(headerClassHome).toBe('header-grey');
    });

    test('When pathname is /myplayers, Then Header class should be header-black', () => {
      const pathnamePlayers = '/myplayers';
      const headerClassPlayers = getHeaderColorClass(pathnamePlayers);
      expect(headerClassPlayers).toBe('header-black');
    });
    test('When pathname is /login, Then Header class should be header-black', () => {
      const pathnameLogin = '/login';
      const headerClassLogin = getHeaderColorClass(pathnameLogin);
      expect(headerClassLogin).toBe('header-black');
    });
    test('When pathname is /register, Then Header class should be header-black', () => {
      const pathnameRegister = '/register';
      const headerClassRegister = getHeaderColorClass(pathnameRegister);
      expect(headerClassRegister).toBe('header-black');
    });
  });
  test('When pathname is /userList, Then Header class should be header-black', () => {
    const pathnameRegister = '/user-list';
    const headerClassRegister = getHeaderColorClass(pathnameRegister);
    expect(headerClassRegister).toBe('header-black');
  });
  test('When pathname is/create-footballer, Then Header class should be header-black', () => {
    const pathnameRegister = '/create-footballer';
    const headerClassRegister = getHeaderColorClass(pathnameRegister);
    expect(headerClassRegister).toBe('header-black');
  });
});
describe('When the user is logged', () => {
  beforeEach(() => {
    render(
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    );
  });
  test('Then should render the logged user avatar', () => {
    const avatarLogin = screen.getByRole('img');
    expect(avatarLogin).toBeInTheDocument();
  });
});
describe('When the user is not logged', () => {
  beforeEach(() => {
    useUsers().loggedUser = null;
    render(
      <Router>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Router>
    );
  });
  test('the user should see register and login', () => {
    expect(screen.getByTestId('register')).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });
});
